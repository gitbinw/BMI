import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

if (module.hot != undefined) module.hot.accept();