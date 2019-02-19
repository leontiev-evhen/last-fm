import {
	REQUEST_TRACKS,
	REQUEST_TRACKS_SUCCEEDED,
	REQUEST_TRACKS_FAILED,
} from '../constants/actionTypes';
import tracks, { INITIAL_STATE } from './tracks';

describe('tracks reducer', () => {
	it('REQUEST_TRACKS after situation without errorMsg', () => {
		const action = {
			type: REQUEST_TRACKS,
		};

		expect(tracks(INITIAL_STATE, action)).toEqual({
			...INITIAL_STATE,
			isFetching: true,
			error: '',
		});
	});

	it('REQUEST_TRACKS after error', () => {
		const initialStateWithError = {
			tracks: [],
			isFetching: true,
			error: 'Unknown error',
		};

		const action = {
			type: REQUEST_TRACKS,
		};

		expect(tracks(initialStateWithError, action)).toEqual({
			...initialStateWithError,
			isFetching: true,
			error: '',
		});
	});

	it('REQUEST_TRACKS_SUCCEEDED', () => {
		const initialState = {
			tracks: [],
			isFetching: true,
			error: '',
		};

		const action = {
			type: REQUEST_TRACKS_SUCCEEDED,
			payload: ['track1', 'track2', 'track3'],
		};

		expect(tracks(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			tracks: action.payload,
		});
	});

	it('REQUEST_TRACKS_FAILED', () => {
		const initialState = {
			tracks: [],
			isFetching: true,
			error: '',
		};

		const action = {
			type: REQUEST_TRACKS_FAILED,
			error: 'Unknown error',
		};

		expect(tracks(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			error: action.error,
		});
	});
});
