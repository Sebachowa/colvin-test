import { put, takeLatest, all, select } from 'redux-saga/effects';
import randomQuote from './../apis/randomQuote'
import unsplash from './../apis/unsplash'
import * as selectors from './selectors'

function* fetchRandomQuote() {
  const quoteResponse = yield randomQuote.get('/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then((result) => {
      let content = result.data[0].content
      content = content.slice(0, 50)
      content = content.replace('<p>', "")
      content = content.replace('</p>', "")
      const author = result.data[0].title
      return { content, author }
    })
  
  const imageResponse = yield unsplash.get('/photos/random', {
    params: { orientation: 'squarish' },
    headers: { Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54' }
  })
    .then((result)=> {
      const image = result.data.urls.regular

      return { image }
    })
  yield put({ type: 'RANDOM_QUOTE_RECEIVED', payload: {...quoteResponse, ...imageResponse} })
}


function* fetchImage() {
  const term = yield select(selectors.getTerm)
  const response = yield unsplash.get('/search/photos', {
    params: { query: term, orientation: 'squarish' },
    headers: { Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54' }
  })
  .then((result) => {
    if (result.data.results.length) {
      const randomImage = result.data.results[Math.floor(Math.random() * result.data.results.length)]
      return randomImage.urls.regular
    }
  })
  yield put({ type: 'IMAGE_RECEIVED', payload: response})
}

function* actionWatcher() {
  yield takeLatest('GET_RANDOM_QUOTE', fetchRandomQuote)
  yield takeLatest('GET_IMAGE', fetchImage)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}



