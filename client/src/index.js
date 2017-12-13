import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
//this is not the default router so we put it in curly brackets
// BrowserRouter as browser is used to just shorten the name 
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
<Router>
<App />
</Router>,

  document.getElementById('root')
);
registerServiceWorker();
