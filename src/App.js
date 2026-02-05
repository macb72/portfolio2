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
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <ScrollProgressBar />
      <main>
        <Welcome />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
