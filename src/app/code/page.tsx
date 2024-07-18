
import Image from 'next/image'

import styles from "./page.module.css"

const projectInfo = [["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."], ["2023", "NeuroPets", "Proin nec volutpat arcu. Proin a sollicitudin lectus, et sodales neque. Vestibulum eu finibus ex."]]

export default function Code() {
  return (
    <main>
      <div className={styles.Code}>
      <div className={styles.headerAbout}>Coding Projects<hr></hr></div>
      <div className={styles.projectGrid}>
        {projectInfo.map((project, index) => (
          <div className={styles.project} key={index}>
          <div className={styles.projectYear}>{project[0]}</div>
          <div className={styles.projectImg}>
              <Image 
                  src={`/${project[1]}.png`}
                  alt="Picture of Project"
                  width={270}
                  height={270}
              />
          </div>
          <div className={styles.projectTitle}>{project[1]}</div>
          <div className={styles.projectDesc}>{project[2]}</div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}