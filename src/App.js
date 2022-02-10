import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const pages = ['hero', 'skills', 'experience', 'languages', 'education', 'code', 'projects']
  const navList = ['/skills', '/experience', '/languages', '/education', '/code', '/projects']

  const [page, setPage] = useState('hero')

  const changePage = (e) => {
    e.target.text !== undefined ? setPage(e.target.text) : setPage('hero');
  }

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
      <Header changePage={changePage} pages={navList} page={page}/>
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/education"element={<Education />} />
        <Route path="/code" element={<Code />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
