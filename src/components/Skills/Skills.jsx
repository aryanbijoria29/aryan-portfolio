import React from "react";
import styles from "./Skills.module.css";
import skills from "../../Data/skills.json";
import { getImageUrl } from "../../utils";
import otherSkills from "../../Data/otherSkills.json"


export const Skills = () =>{
    return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
               {skills.map((skill) =>{
                return (
                    <div key={skill.id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    
                    );
               })}
            </div>
                <ui className={styles.otherSkills}>
                    {otherSkills.map((otherSkill) =>{
                        return (
                            <li className={styles.otherSkillsItem} key={otherSkill.id}>
                               <img src={getImageUrl(otherSkill.imageSrc)} alt={otherSkill.title} />
                               <div className={styles.otherSkillsItemDet}>
                                <h3>{`${otherSkill.title}`}</h3>
                                <p>{`${otherSkill.experiences}`}</p>
                            </div>
                            </li>
                           
                        )
                    })}
                </ui>
        
        </div>
    </section>);
}