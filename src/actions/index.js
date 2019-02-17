import {
	REQUEST_TRACKS,
	REQUEST_TRACKS_SUCCEEDED,
	REQUEST_TRACKS_FAILED,
} from '../constants/actionTypes';
import { getTopTracks } from '../api/tracks';

export const requestTracks = () => ({
	type: REQUEST_TRACKS,
});

export const requestTracksSucceeded = tracks => ({
	type: REQUEST_TRACKS_SUCCEEDED,
	payload: tracks,
});

export const requestTracksFailed = error => ({
	type: REQUEST_TRACKS_FAILED,
	error,
});

export const fetchTracks = () => async dispatch => {
	dispatch(requestTracks());
	try {
		const response = await getTopTracks();
		dispatch(requestTracksSucceeded(response.data.tracks.track));
	} catch (e) {
		dispatch(requestTracksFailed(e.message));
	}
};
