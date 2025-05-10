import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero =()=> {
  return(
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Erika</h1>
        <p className={styles.description}>
            I'm a junior full-stack developer.<br/>
            Reach out  if you'd like to learn more!
        </p>
        <a href="erroblesr@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div> 
    <img src={getImageUrl("hero/pixel-me.jpg")} alt="Hero" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
}

export default Hero;