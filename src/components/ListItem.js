import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from './Image';

export function ListItem({ track }) {
	return (
		<div className="col">
			<div className="track-section">
				<div className="title">
					<Link to={`/artist/${track.artist.name}`}>{track.artist.name}</Link>
					<div>{track.name}</div>
				</div>
				<Image path={track.image[3]['#text']} />
			</div>
		</div>
	);
}

ListItem.propTypes = {
	track: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.array,
		artist: PropTypes.object.isRequired,
	}),
};
