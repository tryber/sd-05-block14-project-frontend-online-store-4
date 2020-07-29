import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import * as api from './services/api';
import PageList from './component/PageList';
import PageCart from './component/PageCart';
import ProductDetailed from './component/ProductDetailed';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageList} />
        <Route path="/cart" component={PageCart} />
        <Route
          render={(props) => <ProductDetailed
            {...props
        } />} exact path="/product/:productId"
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
