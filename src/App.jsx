import React, { Fragment } from 'react';
import About from './components/about/About';
import Intro from './components/Intro/Intro';

const App = () => {
  return (
    <Fragment>
      <Intro />
      <About />
    </Fragment>
  );
};

export default App;
