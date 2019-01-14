import { put, takeLatest, all, select } from 'redux-saga/effects';
import { parseQuoteContent, getRandomImage } from './../helpers'
import randomQuote from './../apis/randomQuote'
import unsplash from './../apis/unsplash'
import * as selectors from './selectors'
import uuidv1 from 'uuid/v1';

function* fetchRandomQuote() {
  const quoteResponse = yield randomQuote.get('/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then((result) => {
      const content = parseQuoteContent(result.data[0].content)
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

  const id = uuidv1()
  yield put({ type: 'RANDOM_QUOTE_RECEIVED', payload: {...quoteResponse, ...imageResponse, id} })
}


function* fetchImage() {
  const term = yield select(selectors.getTerm)
  const response = yield unsplash.get('/search/photos', {
    params: { query: term, orientation: 'squarish' },
    headers: { Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54' }
  })
  .then((result) => {
    if (result.data.results.length) {
      const randomImage = getRandomImage(result.data.results)
      return randomImage 
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



