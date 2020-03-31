import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import Product from './components/Product';
import ViewProduct from './components/ViewProduct';
import Edit from './components/Edit';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Product path="/" />
        <ViewProduct path="/product/:_id" />
        <Edit path = "/product/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
