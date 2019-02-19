import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ErrorBoundary } from '../components';
import { fetchTracks } from '../actions';
import ContainerHOC from '../hoc/ContainerHOC';

const DivContainerHOC = ContainerHOC(({ children }) => children);

export class Home extends Component {
	componentDidMount() {
		if (this.props.tracks.length === 0) this.props.fetchTopTracks();
	}

	render() {
		const { tracks, isFetching, error } = this.props;
		return (
			<div className="row">
				<DivContainerHOC isFetching={isFetching} error={error}>
					{tracks.map((track, index) => (
						<ErrorBoundary key={index}>
              <ListItem track={track} />
            </ErrorBoundary>
					))}
				</DivContainerHOC>
			</div>
		);
	}
}

Home.propTypes = {
	tracks: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	fetchTopTracks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	tracks: state.tracks.tracks,
	isFetching: state.tracks.isFetching,
	error: state.tracks.error,
});

const mapDispatchToProps = dispatch => ({
	fetchTopTracks: () => {
		dispatch(fetchTracks());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
