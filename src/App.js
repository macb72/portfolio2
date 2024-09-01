import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import ScrollProgressBar from './components/ScrollProgressBar';

const App = () => {
  return (
    <div>
      <Header />
      <ScrollProgressBar/>
      <Welcome />
      <About />
      <Experience />
      <Skills />
      <Technologies />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;
