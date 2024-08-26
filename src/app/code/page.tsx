
import Image from 'next/image'

import styles from "./page.module.css"

import Records from "../../data/projects.json"

const projectInfo = Records.all_projects;

export default function Code() {
  return (
    <main>
      <div className={styles.Code}>
      <div className={styles.headerAbout}>Coding Projects<hr></hr></div>
      <div className={styles.projectGrid}>
        {projectInfo.map((project, index) => (
          <div className={(index % 4 == 0 ? styles.projectNoLeftMargin : (index - 3) % 4 == 0 ? styles.projectNoRightMargin : styles.project)} key={index}>
          <div className={`${styles.projectImg} ${styles.imageContainer}`}>
              <Image 
                  src={`/my-site/project_images/${project.project_id}.png`}
                  alt="Picture of Project"
                  width={270}
                  height={270}
                  style={{ width: '100%', height: '100%' }}
              />
              <div className={styles.overlay}><p className={styles.date}>{project.project_year}</p></div>  
          </div>
          <div className={styles.projectTitle}>{project.project_title}</div>
          <div className={styles.projectDesc}>{project.project_desc}</div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}