import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { HOME_INFORMATION, HOME_SIDE_EFFECT } from './actions';
import { homeActions, homeResponse } from './actions'

function* home(action: homeActions) {
	//console.log('this is saga action :',action)
	yield put({type:HOME_SIDE_EFFECT, payload:action.payload});	
}

function* watchHome(){
	yield takeLatest(HOME_INFORMATION, home)
}

export default function* homeSaga(){
	yield fork(watchHome)
}
