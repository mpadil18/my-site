// To inform next js, this is a client component 
"use client"; 

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Records from "../../../data/blog_posts.json"
import { useState, useEffect } from "react";

import styles from "./page.module.css"

interface PostProps {
    title: string;
    date: string;
    content:Array<
    {
        subImage?: number;
        subHeader?: string;
        subText: string;
        subImageAlignment?: number;
        subImageAltText?: string;
    }
    >;
}

export default function BlogDetailView() {
    const pathname = usePathname().replaceAll("/blog/", "").replaceAll("_", " ")
    const [currContent, setCurrContent] = useState<PostProps>({title:"", date:"", content:[{"subText":""}]} || {});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkIfPostExists();
    })

    // Function checks JSON file for the blog post title in the URL.
    // TODO: replace this with a PSQL query
    function checkIfPostExists():void {
        if (pathname) {
            const valsFromRecords = Object.values(Records)
            for (const data of valsFromRecords) {
                for (const item of data)
                    if (item.title == (pathname)) {
                        setCurrContent(item);
                        console.log(item)
                        setLoading(false)
                        return;
                }
    
            }
        }
        setLoading(false)
    }

    return (
        <main>
            {/* If page is loading: display loading sign.
                When page is loaded:
                    If blog post found: render it
                    Else: Display error message
            */}
            {loading ?
            <p style={{color:"white"}}>loading</p> 
            :
            (currContent.title).length > 0 ?
                <div className={styles.BlogDetailView}>
                    <div className={styles.rowContainer}>
                        <div className={styles.postTitle}>{currContent.title}</div>
                        <div className={styles.postDate}>{currContent.date}</div>
                    </div>
                    <hr></hr>

                    {
                        // If subImg exists, check if R/L alignment and render accordingly.
                        // Else, render as a simple postSection
                        (currContent.content).map((item, index) =>
                                ('subImage' in item ?
                                (
                                    // <div className={styles.parent} key={index}>
                                    //     <div className={styles.subParent}>
                                    //     <div className={styles.image}>
                                    //         <Image
                                    //             src={`/${currContent.title}/${item.subImage}.png`}
                                    //             alt={`${item.subImageAltText}`}
                                    //             width={400}
                                    //             height={400}
                                    //         />
                                    //         </div>
                                    //         <div className={styles.subHead}>{item.subHeader}</div>
                                    //     </div>
                                    //     <div className={styles.subText}>{item.subText}</div>
                                    // </div>
                                    <div className={(item.subImageAlignment == 1) ? styles.postSectionImageLeft : styles.postSectionImageRight} key={index}>
                                        <div className={(item.subImageAlignment == 1) ? styles.postImageLeft : styles.postImageRight}>
                                            <Image
                                                src={`/${currContent.title}/${item.subImage}.png`}
                                                alt={`${item.subImageAltText}`}
                                                width={400}
                                                height={400}
                                            />
                                        </div>
                                            <div className={styles.postSection} key={index}>
                                                {
                                                    // Render subHeader if exists. Else, nothing
                                                    item.subHeader ? <div className={styles.subHeader}>{item.subHeader}</div>
                                                    :
                                                    null
                                                }
                                                <div className={styles.subText}>{item.subText}</div>
                                            </div>
                                    </div>
                                ) :
                                <div className={styles.postSection} key={index}>
                                    {
                                        // Render subHeader if exists. Else, nothing
                                        item.subHeader ? <div className={styles.subHeader}>{item.subHeader}</div>
                                        :
                                        null
                                    }
                                    <div className={styles.subText}>{item.subText}</div>
                                </div>
                                )
                        )
                    }
                    
                </div>
                :
                <p style={{color:"white"}}>Sorry, {pathname} not found</p>
            }
        </main>
    )
}