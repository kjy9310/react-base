import { HomeInitialState } from '.';
import produce from 'immer';


const homeReducer = (state = HomeInitialState, action: HomeActionTypes) =>{
	return produce(state, draft) =>{
		switch(action.type){
			case TEST:
				draft = true;
				break;
		}
	}
}


export default homeReducer;
