import React, { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/Intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';

import './app.css';
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme.darkMode ? 'app dark' : 'app'}`}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
