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
        subHeader?: string;
        subText: string;
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
                    <div className={styles.columnContainer}>
                        <div className={styles.headerAbout}>{currContent.title}</div>
                        <div className={styles.postDate}>{currContent.date}</div>
                    </div>
                    <hr></hr>

                    {
                        (currContent.content).map((item, index) =>
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
                    }
                    
                </div>
                :
                <p style={{color:"white"}}>Sorry, {pathname} not found</p>
            }
        </main>
    )
}