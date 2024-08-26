// To inform next js, this is a client component 
"use client"; 

import styles from "./home3.module.css"
import Image from 'next/image'
import WorkRow from '../workrow/workrow'
import { useState } from "react";

const aboutMeInfo = [["Hello, world!", "I’m a 22 year old first gen college grad. I’ve been a long time lover of art, and my time as a Banana Slug at UCSC helped me develop a fondness for nature and technology."], ["What’s in my Tech Toolbelt?", "Python, REACT, JavaScript, GoLang, Visual Studio Code, Figma."],["What I wish I knew when I started coding...", "As long as you start off with some kind of a plan, anything is achievable. Just by formulating what you want to create in pictures, words, and wireframes, half the battle is already done."]]

export default function Home() {
    const [currAboutMe, setCurrAboutMe] = useState(0);

    const frwdInfo = (index:number):undefined => {
        if (index == aboutMeInfo.length - 1) {
            setCurrAboutMe(0);
        }
        else {
            setCurrAboutMe(index + 1);
        }
    };

    const bkwrdInfo = (index:number):undefined => {
        if (index == 0) {
            setCurrAboutMe(aboutMeInfo.length - 1);
        }
        else {
            setCurrAboutMe(index - 1);
        }
    };
    
    return (
        <div className={styles.Home}>
            <div className={styles.Hero}>
                <div className={styles.meImg}>
                    <Image 
                        src="/my-site/MaritzaP.png"
                        alt="Picture of Maritza"
                        width={240}
                        height={240}
                    />
                </div>
                {/* This will involve states for about and content */}
                <div className={styles.AboutMe}>
                <button className={styles.arrow} title="See previous facts about me"
                        onClick={() => bkwrdInfo(currAboutMe)}
                    >
                    <Image 
                        src="/my-site/Play-2.png"
                        alt="Left Arrow"
                        width={40}
                        height={40}
                    />                  
                </button>
                    <span className={styles.area}>
                    <p className={styles.headerAbout}>{aboutMeInfo[currAboutMe][0]}</p>
                    <p className={styles.headerContent}>{aboutMeInfo[currAboutMe][1]}<br/><br/>Click on the side arrows to learn more about me!</p>
                    </span>
                    <button className={styles.arrow} title="See other facts about me"
                        onClick={() => frwdInfo(currAboutMe)}
                    >
                        <Image 
                            src="/Play.png"
                            alt="Right Arrow"
                            width={40}
                            height={40}
                        />                        
                    </button>
                </div>
            </div>

            <div className={styles.WorkExp}>
                <div className={styles.headerAbout}>Work Experience<hr></hr></div>
                <WorkRow 
                    workYear={2023}
                    workArray={[["CITRIS and the Banatao Institute", "Intern", "Received training in leadership and project management, and researched robotics projects."],
                ["GraceHacks @ UCSC", "Tech Lead & Co-Executive Lead", "(Jun '20 - Jul '23) Cross-team hosted 3 annual 24-hr Hackathons for 300+ students of marginalized genders from 6 countries."]]}
                />
                <WorkRow 
                    workYear={2022}
                    workArray={[["Robinhood Markets, Inc.", "Backend Engineering Intern", "Collaborated with cross-functional teams to implement customer experience solutions across the organization."]]}
                />
                <WorkRow 
                    workYear={2021}
                    workArray={[["Harbor High School", "AVID Tutor", "(Nov '19 - Apr '21) Tutored students in all academic areas, including English, Science, Social Science, Computer skills, and Math."]]}
                />
                <WorkRow 
                    workYear={2019}
                    workArray={[["Little Caesars Pizza", "Crew Member", "Resolved customer complaints and determined appropriate courses of action with managers and coworkers."]]}
                />
            </div>
        </div>
    );
}