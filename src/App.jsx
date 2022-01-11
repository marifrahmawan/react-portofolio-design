import React, { Fragment } from 'react';
import About from './components/about/About';
import Intro from './components/Intro/Intro';
import ProductList from './components/productList/ProductList';

const App = () => {
  return (
    <Fragment>
      <Intro />
      <About />
      <ProductList />
    </Fragment>
  );
};

export default App;
