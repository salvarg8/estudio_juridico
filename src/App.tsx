import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css'; // Leaving import in case of future use, but making file empty

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Values />
        <PracticeAreas />
        <About />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
