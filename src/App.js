import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import * as api from './services/api';
import PageList from './component/PageList';


function App() {
  return (
    <BrowserRouter>
      <Route exact to="/" component={PageList} />
    </BrowserRouter>
  );
}

export default App;
