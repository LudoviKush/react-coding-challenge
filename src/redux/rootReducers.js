import { combineReducers } from 'redux';
import { PostReducers } from './reducers/PostReducers';
import { CityReducer } from './reducers/CityReducer';

const rootReducers = combineReducers({
	PostReducers,
	CityReducer
});

export default rootReducers;
