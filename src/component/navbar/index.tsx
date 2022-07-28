import React from 'react';
import { Link } from 'react-router-dom';
import { Drop } from '../UI';

/**
 * @description navbar React component
 * @param null
 * @returns jsx Element
 */

// eslint-disable-next-line no-undef
const Navbar: React.FC = (): JSX.Element => (
	<nav>
		<div>
			<ul>
				<li>
					<Link to="/funktionierts">SO FUNKTIONIERT&apos;S</Link>
				</li>
				<li>
					<Link to="/sonderangebote">SONDERANGEBOTE</Link>
				</li>
				<li>
					MEIN BERIECH
					<Drop />
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
