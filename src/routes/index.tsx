import React from 'react';
import { Route, Routes, BrowserRouter as Routing } from 'react-router-dom';
import { Home } from '../pages';


/**
 * @description Global Router React component
 * @param null
 * @returns jsx Element 
*/

// eslint-disable-next-line no-undef
const GlobalRoute: React.FC = (): JSX.Element => (
	<Routing>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</Routing>
);

export default GlobalRoute;
