import React, { Component } from 'react';

export default class Track extends Component {
	render() {
		return (
			<div className="container">
        <h1>Track {this.props.match.params.id}</h1>
      </div>
		);
	}
}
