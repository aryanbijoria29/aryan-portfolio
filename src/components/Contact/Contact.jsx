import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () =>{
    return <footer className={styles.container} id="contact">
        <div  className={styles.text} >
            <h2>Contact </h2>
            <p>Reach Out to Me!</p>
        </div>
          <ul  className={styles.links}>
            <li  className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:aryanbijoriya@gmail.com">aryanbijoriya@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/aryan-bijoria/">linkedin.com/in/aryan-bijoria</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="gitHub icon"/>
                <a href="https://github.com/aryanbijoria29">github.com/aryanbijoria29</a>
            </li>
          </ul>
    </footer>
}