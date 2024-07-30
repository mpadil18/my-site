import Image from 'next/image'
import Records from "../../data/art_posts.json"

import styles from "./page.module.css"
import Link from 'next/link'

const artInfo = Records

export default function Art() {
    return (
        <main>
            <div className={styles.Art}>
                <div className={styles.headerAbout}>Art<hr></hr></div>
                <div className={styles.artGrid}>
                {
                    (artInfo.art_data).map((artPost, index) => (
                        // <div className={styles.artPostContainer} key={index}>
                            <Image
                                src={`/art_images/${artPost.art_post_id}.png`}
                                alt={`${artPost.alt}`}
                                width={350}
                                height={350}
                                className={(index % 3 == 0 ? styles.artPostNoLeftMargin : (index - 2) % 3 == 0 ? styles.artPostNoRightMargin : styles.artPost)}
                                key={index}
                                style={{ width: '32%', height: '32%' }}
                            />
                        // </div>
                    ))
                }
                </div>
            </div>
        </main>
    )
}