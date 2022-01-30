import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';
import './assets/css/style.css';
import './assets/css/css.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<ToastContainer />
	</React.StrictMode>,
	document.getElementById('root')
);
