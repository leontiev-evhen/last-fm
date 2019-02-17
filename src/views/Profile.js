import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getInfo } from '../api/tracks';
import { ProfileInfo } from '../components';
import ContainerHOC from '../hoc/ContainerHOC';

const DivContainerHOC = ContainerHOC(ProfileInfo);

export default class Profile extends Component {
	state = {
		artist: {},
		isFetching: true,
		error: '',
	};
	componentDidMount() {
		this.fetchArtist();
	}
	fetchArtist = async () => {
		try {
			const response = await getInfo(this.props.match.params.name);
			this.setState({
				artist: response.data.artist,
				isFetching: false,
			});
		} catch (e) {
			this.setState({
				error: e.message,
				isFetching: false,
			});
		}
	};

	render() {
		const { artist, isFetching, error } = this.state;
		return (
			<DivContainerHOC error={error} isFetching={isFetching} profile={artist} />
		);
	}
}

Profile.propTypes = {
	match: PropTypes.object.isRequired,
};
