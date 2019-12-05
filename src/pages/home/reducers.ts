// import { HomeInitialState } from '.';
import produce from 'immer';
import { HOME_SIDE_EFFECT, HOME_INFORMATION, homeActions } from './actions';

export type HomeInitialState = {
	test: string,
	sideEffect: string
} 

export const homeInitialState: HomeInitialState = {
	test: "test",
	sideEffect: "this is default SideEffect"
}

const homeReducer = (state = homeInitialState, action: homeActions) =>{
	return produce(state, draft =>{
		switch(action.type){
			case HOME_INFORMATION:
				draft.test = action.payload
				break;
			case HOME_SIDE_EFFECT:
				//draft.sideEffect= action.payload
				
				break;
			default:
				console.log("DONE")
		}
	});
}


export default homeReducer;
