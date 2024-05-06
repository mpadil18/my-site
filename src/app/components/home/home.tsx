import "./home.css"
import Image from 'next/image'

export default function Home() {
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
                    <p className="headerAbout">Hello, world!</p>
                    <p className="headerContent">I’m a 22 year old first gen college grad. I’ve been a long time lover of art, and my time as a Banana Slug at UCSC helped me develop a fondness for nature and technology. <br/><br/>Click on the side arrows to learn more about me!</p>
                </div>
            </div>

            <div className="WorkExp">
                <div className="headerAbout">Work Experience<hr></hr></div>
                <div className="WorkRow">
                    <p className="WorkYear">2023</p>
                    <ul className="Experience">
                        <li>
                        <p className="WorkPlace"><strong>CITRIS and the Banatao Institute</strong> - Intern</p>
                        <p className="WorkDesc">Received training in leadership and project management, and researched robotics projects.</p>
                        </li>
                        <li>
                        <p className="WorkPlace"><strong>GraceHacks @ UCSC</strong> - Tech Lead & Co-Executive Lead</p>
                        <p className="WorkDesc">Cross-team hosted 3 annual 24-hr Hackathons for 300+ students of marginalized genders from 6 countries.</p>
                        </li>
                    </ul>
                </div>
                <div className="WorkRow">
                    <p className="WorkYear">2022</p>
                    <ul className="Experience">
                        <li>
                        <p className="WorkPlace"><strong>Robinhood Markets, Inc.</strong> - Software Engineer Intern</p>
                        <p className="WorkDesc">Collaborated with cross-functional teams to implement customer experience solutions across the organization.</p>
                        </li>
                    </ul>
                </div>
                <div className="WorkRow">
                    <p className="WorkYear">2019</p>
                    <ul className="Experience">
                        <li>
                        <p className="WorkPlace"><strong>Harbor High School</strong> - AVID Tutor</p>
                        <p className="WorkDesc">Tutored students in all academic areas, including English, Science, Social Science, Computer skills, and Math.</p>
                        </li>
                        <li>
                        <p className="WorkPlace"><strong>Little Caesars Pizza</strong> - Crew Member</p>
                        <p className="WorkDesc">Resolved customer complaints and determined appropriate courses of action with managers and coworkers.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}