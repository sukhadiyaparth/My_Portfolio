import React from "react";
import "./hero.css";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Resum from '../../../public/My_resume.pdf'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} `}>
        <h1 className={` fo-sm ${styles.title} `}>Hi, I'm Parth</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. 
        </p>
        <a href={Resum} className={styles.contactBtn}>
          Download my resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/Hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};