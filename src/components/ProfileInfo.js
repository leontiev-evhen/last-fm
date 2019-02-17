import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './Image';
import { Tag } from './Tag';

export function ProfileInfo({ profile }) {
	return (
		<div className="profile-section">
			<div className="row">
				<div className="col">
					<Image path={profile.image[3]['#text']} />
				</div>
				<div className="col">
					<div className="profile-info">
						<h2>{profile.name}</h2>
						<div className="row">
							<h2>Biography</h2>
							<div
								className="profile-content"
								dangerouslySetInnerHTML={{ __html: profile.bio.content }}
							/>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="profile-info">
						<h2>Tags</h2>
						{profile.tags.tag.map((item, index) => (
							<div key={index}>
								<Tag name={item.name} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

ProfileInfo.propTypes = {
	profile: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.array,
		bio: PropTypes.object.isRequired,
		tags: PropTypes.shape({
			tag: PropTypes.array.isRequired,
		}),
	}),
};
