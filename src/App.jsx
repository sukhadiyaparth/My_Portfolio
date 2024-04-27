import React from 'react';
import styles from "./App.module.css";
import { Navbar } from "./componenents/Navbar/Navbar";
import { Hero } from "./componenents/Hero/Hero";
import { Contact } from "./componenents/Contact/Contact";
import  About from "./componenents/About/Ab";
import Experience  from './componenents/Experience/Experience';
function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </div>
  )
}

export default App