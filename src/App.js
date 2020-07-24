import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

function App() {
  return (
    <div>
      {api.getCategories()}
    </div>
  );
}

export default App;
