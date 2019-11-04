import { fork, takeEvery, all } from 'redux-saga/effects';
import homeSaga from './pages/home/sagas';

export function* combinedSaga() {
	yield fork(homeSaga)
}
