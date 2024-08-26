// To inform next js, this is a client component 
"use client"; 

import Image from 'next/image'
import Records from "../../data/blog_posts.json"

import styles from "./page.module.css"
import Link from 'next/link'

const projectInfo = Records.all_blog_data

export default function Blog() {
  return (
    <main>
      <div className={styles.Blog}>
      <div className={styles.headerAbout}>Blog<hr></hr></div>
      <div className={styles.projectGrid}>
      {
        projectInfo.map((project, index) =>
          // <div className={styles.BlogSubContainer} key={index}>
                <div className={(index % 4 == 0 ? styles.projectNoLeftMargin : (index - 3) % 4 == 0 ? styles.projectNoRightMargin : styles.project)} key={index}>
                  <div className={`${styles.projectImg} ${styles.imageContainer}`}>
                    <span className={styles.image}>
                      <Image 
                          src={`/my-site/${project.title}.png`}
                          alt={`Picture of project - /${project.title}`}
                          width={270}
                          height={270}
                          style={{ width: '100%', height: '100%' }}
                      />       
                      </span>
                      <div className={styles.overlay}><p className={styles.date}>{(project.date.split(" ")[0]).slice(0, 3)} {(project.date.split(" ")[1])} {(project.date.split(" ")[2])}</p></div>  
                  </div>
                  <Link
                  href={
                  {pathname: `/blog/${project.title.replaceAll(" ", "_")}`
                  }} key={project.title.replaceAll(" ", "_")} style={{ textDecoration: 'none', color: 'white' }}>
                  <div className={styles.projectTitle}>{project.title.slice(0, 37)}{(project.title.length > (project.title.slice(0, 37)).length) ? "..." : ""}</div>
                  {
                    project.content[0].subText ?
                    <div className={styles.projectDesc}>{project.content[0].subText.slice(0,150)}</div>
                    :
                    null
                  }
                  </Link>
                </div>
          // </div>
        )
      }
      </div>
      </div>
    </main>
  );
}