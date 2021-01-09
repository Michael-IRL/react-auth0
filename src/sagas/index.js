import { all } from 'redux-saga/effects';

import { loadToDoList } from './toToSagas';
import { handleAuthenticationCallback } from './authSagas';

const sagas = [loadToDoList(), handleAuthenticationCallback()];

export default function* rootSaga() {
	yield all(sagas);
}
