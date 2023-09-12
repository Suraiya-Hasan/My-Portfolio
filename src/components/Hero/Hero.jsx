import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I am Suraiya</h1>
        <p className={styles.description}>
          I am a final year student at the Islamic University of Technology in
          Gazipur, where I am completing my BSc in Software Engineering. My
          academic journey has been marked by a deep passion for technology and
          a relentless pursuit of refining my analytical and problem-solving
          abilities. Contact me to learn more!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:suraiya.hasan2001@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
