// To inform next js, this is a client component 
"use client"; 

import "./home3.css"
import Image from 'next/image'
import WorkRow from '../workrow/workrow'
import { useState } from "react";

const aboutMeInfo = [["Hello, world!", "I’m a 22 year old first gen college grad. I’ve been a long time lover of art, and my time as a Banana Slug at UCSC helped me develop a fondness for nature and technology."], ["What’s in my Tech Toolbelt?", "Python, REACT, JavaScript, GoLang, Visual Studio Code, Figma"],["What I wish I knew when I started coding...", "I’m a 22 year old first gen college grad. I’ve been a long time lover of art, and my time as a Banana Slug at UCSC helped me develop a fondness for nature and technology."]]

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
        <div className="Home">
            <div className="Hero">
                <div className="meImg">
                    <Image 
                        src="/MaritzaP.png"
                        alt="Picture of Maritza"
                        width={240}
                        height={240}
                    />
                </div>
                {/* This will involve states for about and content */}
                <div className="AboutMe">
                <button className="arrow"
                        onClick={() => bkwrdInfo(currAboutMe)}
                    >
                    <Image 
                        src="/Play-2.png"
                        alt="Left Arrow"
                        width={40}
                        height={40}
                    />                  
                </button>
                    <span className="area">
                    <p className="headerAbout">{aboutMeInfo[currAboutMe][0]}</p>
                    <p className="headerContent">{aboutMeInfo[currAboutMe][1]}<br/><br/>Click on the side arrows to learn more about me!</p>
                    </span>
                    <button className="arrow"
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

            <div className="WorkExp">
                <div className="headerAbout">Work Experience<hr></hr></div>
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