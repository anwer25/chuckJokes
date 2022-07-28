import React from 'react';
import { Link } from 'react-router-dom';
/**
 * @description dropDown React component
 * @param null
 * @returns jsx Element
 */

// eslint-disable-next-line no-undef
const Drop: React.FC = (): JSX.Element => (
	<div>
		<ul>
			<li>
				<Link to="/published-jokes">My published jokes</Link>
			</li>
			<li>
				<Link to="saved-jokes">My saved jokes</Link>
			</li>
			<li>
				<Link to="account">Account information</Link>
			</li>
			<li>
				<Link to="publish">Publish new joke</Link>
			</li>
		</ul>
	</div>
);

export default Drop;
