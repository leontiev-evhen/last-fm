import {
	REQUEST_TRACKS,
	REQUEST_TRACKS_SUCCEEDED,
	REQUEST_TRACKS_FAILED,
} from '../constants/actionTypes';

export const INITIAL_STATE = {
	isFetching: false,
	error: '',
	tracks: [],
};

const tracks = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_TRACKS:
			return {
				...state,
				isFetching: true,
				error: '',
			};
		case REQUEST_TRACKS_SUCCEEDED:
			return {
				...state,
				tracks: action.payload,
				isFetching: false,
			};
		case REQUEST_TRACKS_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default tracks;
