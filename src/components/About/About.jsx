import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () =>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="about me" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText} >
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with skills of React and Bootstrap framework.
                        </p>
                    </div>

                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                    <div  className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I'm a backend developer with skills of Node and Express framework.
                        </p>
                    </div>

                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
                    <div  className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages.
                        </p>
                    </div>

                </li>
            </ul>
        </div>
    </section>
}