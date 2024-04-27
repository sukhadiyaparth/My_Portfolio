import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:parthsukhadiya186@email.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="//"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
        </li>
        <li className={styles.link}>
          <a href="h//"> <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
         
        </li>
      </ul>
    </footer>
  );
};