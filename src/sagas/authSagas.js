import { call, put, takeLatest } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED, USER_LOG_IN, USER_LOG_OUT } from '../actions';
import { handleAuthentication, signIn, signOut } from '../Auth';

export function* parseHash() {
	const user = yield call(handleAuthentication);
	yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
	yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export function* handleUserLogin() {
	yield takeLatest(USER_LOG_IN, signIn);
}

export function* handleUserLogOut() {
	yield takeLatest(USER_LOG_OUT, signOut);
}
