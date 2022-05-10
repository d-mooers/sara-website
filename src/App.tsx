import React from 'react';

import Main from './components/Main/index';
import About from './components/About/index';
import Project from './components/Projects/index';
import Footer from './components/Footer/index';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <Main />
    <About />
    {/* <Experience /> */}
    <Project />
    <Footer />
    <GlobalStyles />
  </>
);

export default App;
