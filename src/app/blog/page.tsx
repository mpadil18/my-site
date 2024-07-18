// To inform next js, this is a client component 
"use client"; 

import Image from 'next/image'

import styles from "./page.module.css"
import Link from 'next/link'

const projectInfo = {"2023": [["Review - Moonridge Cafe", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["Review - Everything Everywhere All At Once", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["Ode to Cheese", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["Some Large Title", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."]]}

export default function Blog() {
  return (
    <main>
      <div className={styles.Blog}>
      <div className={styles.headerAbout}>Blog<hr></hr></div>
      {/* <div className="projectGrid"> */}
      {
        Object.entries(projectInfo).map(([year, projectsByYear], index) =>
          <div className={styles.BlogSubContainer} key={index}>
            <div className={styles.projectYear}>{year}</div>
            <div className={styles.projectGrid}>
              {projectsByYear.map((project, index) => 
              // <div key={index}>
              <Link
                href={
                {pathname: `/blog/${project[0].replaceAll(" ", "_").replaceAll("-", "_")}`,
                 query: {
                  id: index
                 }
                }} key={project[0].replaceAll(" ", "_").replaceAll("-", "_")} style={{ textDecoration: 'none', color: 'white' }}>
                <div className={styles.project}>
                  <div className={`${styles.projectImg} ${styles.imageContainer}`}>
                    <span className={styles.image}>
                      <Image 
                          src={`/${project[0]}.png`}
                          alt={`Picture of project - /${project[0]}`}
                          width={270}
                          height={270}
                      />       
                      </span>
                      <div className={styles.overlay}><p className={styles.date}>Mar 10</p></div>  
                  </div>
                  <div className={styles.projectTitle}>{project[0].slice(0, 33)}{(project[0].length > (project[1].slice(0, 33)).length) ? "..." : ""}</div>
                  <div className={styles.projectDesc}>{project[1]}</div>        
                </div>
                </Link>
                // </div>
              )}
            </div>
          </div>
        )
      }
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
      {/* </div> */}
    </main>
  );
}