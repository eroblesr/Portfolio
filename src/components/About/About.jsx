import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About =()=> {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <p>
            Highly motivated Jr Full Stack Developer with over a year of practical experience 
            in software development and application support  providing technical support in Agile environments.
            JavaScript (React, Node.js) is the main tool used to debug, optimize, and deliver functional applications.
            Strong problem solving skills and teamwork with cross-functional teams to improve user experience
            </p>
            <h3>
                My interests:
            </h3>
            <ul className={styles.aboutHobbies}>
                <li>
                    <img src={getImageUrl("about/Crochet.png")} alt="crochet img" />
                </li>
                <li>
                    <img src={getImageUrl("about/cat.png")} alt="cat img" />
                </li>
                <li>
                    <img src={getImageUrl("about/Control.png")} alt="Control img" />
                </li>
                <li>
                    <img src={getImageUrl("about/TV.png")} alt="TV img" />
                </li>
                <li>
                    <img src={getImageUrl("about/Ceramic.png")} alt="Ceramic img" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About