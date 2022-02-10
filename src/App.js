import React from "react";
import styles from './App.module.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Languages from './components/Languages/Languages'
import Education from './components/Education/Education'
import Code from './components/Code/Code'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Languages />
      <Education />
      <Code />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
