import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { HOME_INFORMATION, HOME_SIDE_EFFECT } from './actions';
import { homeActions, homeResponse } from './actions'
import { sampleApiTest } from '../../api'
import axios from 'axios';

function* home(action: homeActions) {
	yield put({type:HOME_SIDE_EFFECT, payload:action.payload});	
}

function* watchHome(){
	//yield takeLatest(HOME_INFORMATION, home)
	try{
		let res = yield axios.get(sampleApiTest);
		yield console.log("res", res.data)
	}catch(e){
		console.log("ERROR!!!",e)
	}
	yield put({type: HOME_INFORMATION, payload:"affected by side effect"})
		
}

function* apiTest(){
	let res = yield axios.get(sampleApiTest);
	console.log("res",res)
	console.log("api",sampleApiTest)
}

export default function* homeSaga(){
	yield takeLatest(HOME_SIDE_EFFECT, watchHome)
}
