import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;