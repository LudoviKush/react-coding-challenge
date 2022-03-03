import { combineReducers } from 'redux';
import { PostReducer } from './reducers/PostReducer';
import { CityReducer } from './reducers/CityReducer';

const rootReducers = combineReducers({
	PostReducer,
	CityReducer
});

export default rootReducers;
