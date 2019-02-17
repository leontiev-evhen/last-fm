import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<header>
			<div className="header-section section-title">
				<h2>
					<Link to="/">Last fm</Link>
				</h2>
			</div>
		</header>
	);
}
