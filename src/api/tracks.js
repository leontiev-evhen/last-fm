import axios from 'axios';
import { API_URL } from '../constants'

export const getTopTracks = () => {
  return axios.get(`${API_URL}&method=chart.gettoptracks`);
};

export const getInfo = artist => {
  return axios.get(`${API_URL}&method=artist.getinfo&artist=${artist}`);
};