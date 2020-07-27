import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import * as api from './services/api';
import PageList from './component/PageList';
import PageCart from './component/PageCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageList} />
        <Route path="/cart" component={PageCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
