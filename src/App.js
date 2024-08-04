import React from 'react';
import './App.css';
import Header from './Components/header';
import Home from './Components/home';
import About from './Components/about';
import Projects from './Components/projects';
import Skills from './Components/skills';
import Footer from './Components/footer';
import Contact from './Components/contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
      <section id="Home"> 
      <Home />
      </section>
      <section id='About'>
        <About />
        </section>
        <section id='Projects'>
        <Projects/>
        </section>
        <section id='Skills'>
        <Skills />
        </section>
        <section id='Contact'>
        <Contact />
        </section>

        </main>
      <Footer />

    </div>
  );
}

export default App;
