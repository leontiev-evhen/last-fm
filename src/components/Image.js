import React from 'react';
import PropTypes from 'prop-types';
import imagenotfound from '../assets/imagenotfound.png';

export function Image({ path }) {
	if (path) {
		return <img src={path} alt="" />;
	}
	return <img src={imagenotfound} alt="" />;
}

Image.propTypes = {
	path: PropTypes.string,
};
