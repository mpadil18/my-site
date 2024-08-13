// To inform next js, this is a client component 
"use client"; 

import Image from 'next/image'
import Records from "../../data/blog_posts.json"

import styles from "./page.module.css"
import Link from 'next/link'

const projectInfo = Records

export default function Blog() {
  return (
    <main>
      <div className={styles.Blog}>
      <div className={styles.headerAbout}>Blog<hr></hr></div>
      {
        Object.entries(projectInfo).map(([year, projectsByYear], index) =>
          <div className={styles.BlogSubContainer} key={index}>
            <div className={styles.projectYear}>{year}</div>
            <div className={styles.projectGrid}>
              {projectsByYear.map((project, index) => 
                <div className={(index % 3 == 0 ? styles.projectNoLeftMargin : (index - 2) % 3 == 0 ? styles.projectNoRightMargin : styles.project)} key={index}>
                  <div className={`${styles.projectImg} ${styles.imageContainer}`}>
                    <span className={styles.image}>
                      <Image 
                          src={`/${project.title}.png`}
                          alt={`Picture of project - /${project.title}`}
                          width={270}
                          height={270}
                          style={{ width: '100%', height: '100%' }}
                      />       
                      </span>
                      <div className={styles.overlay}><p className={styles.date}>Mar 10</p></div>  
                  </div>
                  <Link
                  href={
                  {pathname: `/blog/${project.title.replaceAll(" ", "_")}`
                  }} key={project.title.replaceAll(" ", "_")} style={{ textDecoration: 'none', color: 'white' }}>
                  <div className={styles.projectTitle}>{project.title.slice(0, 33)}{(project.title.length > (project.title.slice(0, 33)).length) ? "..." : ""}</div>
                  {
                    project.content[0].subText ?
                    <div className={styles.projectDesc}>{project.content[0].subText.slice(0,150)}</div>
                    :
                    null
                  }
                  </Link>
                </div>
              )}
            </div>
          </div>
        )
      }
      </div>
    </main>
  );
}