import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getInfo } from '../api/tracks';
import { ProfileInfo } from '../components';
import ContainerHOC from '../hoc/ContainerHOC';

const DivContainerHOC = ContainerHOC(ProfileInfo);

export default class Profile extends Component {
	state = {
		profile: {},
		isFetching: true,
		error: '',
	};
	componentDidMount() {
		this.fetchProfile();
	}
	fetchProfile = async () => {
		try {
			const response = await getInfo(this.props.match.params.name);
			if (response.data.error) {
				this.setState({
					error: response.data.message,
					isFetching: false,
				});
				return;
			}
			this.setState({
				profile: response.data.artist,
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
		const { profile, isFetching, error } = this.state;
		return (
			<DivContainerHOC
				error={error}
				isFetching={isFetching}
				profile={profile}
			/>
		);
	}
}

Profile.propTypes = {
	match: PropTypes.object.isRequired,
};
