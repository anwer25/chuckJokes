import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import './assets/scss/style.scss';
// eslint-disable-next-line import/extensions
import reportWebVitals from './reportWebVitals';

const queryCLient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryCLient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
