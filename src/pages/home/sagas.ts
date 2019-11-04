import { all, fork, takeLatest } from 'redux-saga/effects';
import { HOME_INFORMATION } from './actions';
import { homeActions, homeResponse } from './actions'

function* home(action: homeActions) {
	console.log("home saga called")	
}

function* watchHome(){
	yield takeLatest(HOME_INFORMATION, home)
}

export default function* homeSaga(){
	yield fork(watchHome)
}
