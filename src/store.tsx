import { combineReducers } from 'redux';
import homeReducer from './pages/home';

export default combineReducers({
   home: homeReducer
});

