// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Item from './component/home';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Item/>
    
    </React.StrictMode>
  </Router>,
  
  document.getElementById('root')
);
