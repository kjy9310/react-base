import { combineReducers } from 'redux';
import homeReducer from './pages/home/reducer';

export const combinedReducers = combineReducers<any>({
   home: homeReducer
});

