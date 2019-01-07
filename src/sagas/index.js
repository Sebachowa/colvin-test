import { put, takeLatest, all } from 'redux-saga/effects';
import randomQuote from './../apis/randomQuote'

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

function* actionWatcher() {
  yield takeLatest('GET_RANDOM_QUOTE', fetchRandomQuote)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}



