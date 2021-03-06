import { call, put, takeEvery } from 'redux-saga/effects';
import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS } from '../actions';

export function* fetchToDoList() {
	const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
	const response = yield call(fetch, endpoint);
	const data = yield response.json();
	yield put({ type: TODO_LIST_SUCCESS, toDoList: data });
}

export function* loadToDoList() {
	yield takeEvery(TODO_LIST_REQUEST, fetchToDoList);
}
