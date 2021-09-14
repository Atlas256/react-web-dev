import './styles/null.css';
import './styles/App.css';
import './fontAwesome/styles/fontAwesome.css'

import Header from './components/Header/Header.jsx'
import Page from './components/Page/Page.jsx';

import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';


function App() {

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Router>
          <Header />
          <Page />
        </Router>
      </div>
    </div>
  );
}

export default App;

