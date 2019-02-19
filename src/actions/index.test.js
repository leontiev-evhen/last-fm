import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
	REQUEST_TRACKS,
	REQUEST_TRACKS_SUCCEEDED,
	REQUEST_TRACKS_FAILED,
} from '../constants/actionTypes';
import {
	requestTracks,
	requestTracksSucceeded,
	requestTracksFailed,
	fetchTracks,
} from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const payload = ['track1', 'track2', 'track3'];

describe('actions', () => {
	it('requestTracks()', () => {
		expect(requestTracks()).toEqual({
			type: REQUEST_TRACKS,
		});
	});
	it('requestTracksSucceeded()', () => {
		expect(requestTracksSucceeded(payload)).toEqual({
			type: REQUEST_TRACKS_SUCCEEDED,
			payload,
		});
	});
	it('requestTracksFailed()', () => {
		expect(requestTracksFailed('Unknown error')).toEqual({
			type: REQUEST_TRACKS_FAILED,
			error: 'Unknown error',
		});
	});

	describe('async action', () => {
		beforeEach(function() {
			moxios.install();
		});

		afterEach(function() {
			moxios.uninstall();
		});
		it('fetchTracks() when fetching tracks has been done', () => {
			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 200,
					response: { tracks: { track: payload } },
				});
			});

			const expectedActions = [
				{ type: REQUEST_TRACKS },
				{ type: REQUEST_TRACKS_SUCCEEDED, payload: payload },
			];
			const store = mockStore({});

			return store.dispatch(fetchTracks()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});

		it('fetchTracks() when fetching tracks has been failed', () => {
			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 403,
					response: 'Request failed with status code 403',
				});
			});

			const expectedActions = [
				{ type: REQUEST_TRACKS },
				{
					type: REQUEST_TRACKS_FAILED,
					error: 'Request failed with status code 403',
				},
			];
			const store = mockStore({});

			return store.dispatch(fetchTracks()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});
