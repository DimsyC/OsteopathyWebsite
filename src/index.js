//Polyfils for Internet explorer browser support
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

//Required React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Main application for posturoplus
import App from './App';

//css file containing styling for the application
//Bootstrap for Styling
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
