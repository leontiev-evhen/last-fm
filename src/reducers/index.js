import { combineReducers } from 'redux';
import tracks from './tracks';

const lastFm = combineReducers({
	tracks,
});

export default lastFm;
