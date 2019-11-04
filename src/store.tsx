import { combineReducers } from 'redux';
import homeReducer from './pages/home/reducers';

export const combinedReducers = combineReducers<any>({
   home: homeReducer
});

