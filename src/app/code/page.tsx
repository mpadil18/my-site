
import Image from 'next/image'

import "./page.css"

const projectInfo = [["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."]]

export default function Code() {
  return (
    <main>
      <div className="Code">
      <div className="headerAbout">Coding Projects<hr></hr></div>
      <div className="projectGrid">
        {projectInfo.map((project, index) => (
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
          <div className="projectTitle">{project[1]}</div>
          <div className="projectDesc">{project[2]}</div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}