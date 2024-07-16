
import Image from 'next/image'

import "./page.css"

const projectInfo = {"2023": [["Review: Moonridge Cafe", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["Review: Everything Everywhere All At Once", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["Ode to Cheese", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["Some Large Title", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."]]}

export default function Code() {
  return (
    <main>
      <div className="Blog">
      <div className="headerAbout">Blog<hr></hr></div>
      <div className="projectGrid">
      {}
        {/* {projectInfo.map((project, index) => (
          <div className="project" key={index}>
          <div className="projectYear">{project[0]}</div>
          <div className="projectImg">
              <Image 
                  src={`/${project[1]}.png`}
                  alt="Picture of Project"
                  width={270}
                  height={270}
              />
          </div>
          <div className="projectTitle">{project[1].slice(0, 33)}{(project[1].length > (project[1].slice(0, 33)).length) ? "..." : ""}</div>
          <div className="projectDesc">{project[2]}</div>
          </div>
        ))} */}
      </div>
      </div>
    </main>
  );
}