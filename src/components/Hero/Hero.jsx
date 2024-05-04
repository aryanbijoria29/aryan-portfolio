import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aryan</h1>
        <h2 className={styles.roles}>
              I'm  a
                <span>
                    <Typewriter
                        words={[
                            " Student",
                            " Developer",
                            " Programmer"
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
        </h2>
        <p className={styles.description}>
        
          I'm a full-stack developer seeking an entry level position in an organization in order to begin my career where I can expand
my knowledge and skills and contribute to the growth of the organization.
        </p>
        <a href="https://drive.google.com/file/d/1BproEmFjXJA8vA2II7c-gjyyzafMJYXI/view?usp=sharing" className={styles.resumeBtn}>
          Check Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};