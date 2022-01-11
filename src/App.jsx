import React, { Fragment } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/Intro/Intro';
import ProductList from './components/productList/ProductList';

const App = () => {
  return (
    <Fragment>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </Fragment>
  );
};

export default App;
