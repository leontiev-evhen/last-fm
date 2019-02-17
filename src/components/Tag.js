import React from 'react';
import PropTypes from 'prop-types';

export function Tag({ name }) {
	return <div className="tag-section">{name}</div>;
}

Tag.propTypes = {
	name: PropTypes.string.isRequired,
};
