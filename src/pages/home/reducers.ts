// import { HomeInitialState } from '.';
import produce from 'immer';
import { HOME_INFORMATION, homeActions } from './actions';

export type HomeInitialState = {
	test: string
} 

export const homeInitialState: HomeInitialState = {
	test: "test"
}

const homeReducer = (state = homeInitialState, action: homeActions) =>{
	return produce(state, draft =>{
		switch(action.type){
			case HOME_INFORMATION:
				draft.test="SUCCESS"
				break;
			default:
				console.log("DONE")
		}
	});
}


export default homeReducer;
