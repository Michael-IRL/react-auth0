import { all } from 'redux-saga/effects';

import { loadToDoList } from './toToSagas';
import { handleAuthenticationCallback, handleUserLogin, handleUserLogOut } from './authSagas';

const sagas = [loadToDoList(), handleAuthenticationCallback(), handleUserLogin(), handleUserLogOut()];

export default function* rootSaga() {
	yield all(sagas);
}
