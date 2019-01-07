import { put, takeLatest, all } from 'redux-saga/effects';
import randomQuote from './../apis/randomQuote'
import unsplash from './../apis/unsplash'

function* fetchRandomQuote() {
  const response = yield randomQuote.get('/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(result => {
      let content = result.data[0].content
      content = content.slice(0, 50)
      content = content.replace('<p>', "")
      content = content.replace('</p>', "")
      let author = result.data[0].title
      return { content, author }
    })

  yield put({ type: 'RANDOM_QUOTE_RECEIVED', payload: response })
}

function* fetchRandomImage() {
  const response = yield unsplash.get('/photos/random', {
    params: { orientation: 'squarish' },
    headers: { Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54'}
  })
    .then((result) => {
      return result.data.urls.regular
    })
  yield put({ type: 'RANDOM_IMAGE_RECEIVED', payload: response })
}

function* fetchImage() {
  const response = yield randomQuote.get('/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(result => {
      let content = result.data[0].content
      content = content.slice(0, 50)
      content = content.replace('<p>', "")
      content = content.replace('</p>', "")
      let author = result.data[0].title
      return { content, author }
    })

  yield put({ type: 'RANDOM_IMAGE', payload: response })
}

function* actionWatcher() {
  yield takeLatest('GET_RANDOM_QUOTE', fetchRandomQuote)
  yield takeLatest('GET_RANDOM_IMAGE', fetchRandomImage)
  yield takeLatest('GET_IMAGE', fetchImage)

}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}



