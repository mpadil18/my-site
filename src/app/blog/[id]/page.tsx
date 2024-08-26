import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Records from "../../../data/blog_posts.json"
import { useState, useEffect } from "react";

import styles from "./page.module.css"

// Defining all optional/non-optional properties that a single post can have.
// A post's content is represented by an array of subsections.
interface PostProps {
    title: string;
    date: string;
    content:Array<
    {
        subImage?: number;
        subHeader?: string;
        subText?: string;
        subImageAlignment?: number;
        subImageAltText?: string;
        imgWidthAndHeight?: Array<number>;
    }
    >;
}

export async function generateStaticParams() {
    return Records.all_blog_data.map((d) => {return {id : d.title.replaceAll(" ", "_")}});
}

export default function BlogDetailView({ params }: { params: { id: string } }) {
    // Retrieve the pathname that the user attempted to access, and use to search into the database
    const blogTitleToFetch = params.id.replaceAll("_", " ")
    const loading = false;

    // Function checks JSON file for the blog post title in the URL.
    // Regardless of whether records are found in the end, loading will cease.
    // TODO: replace this with a PSQL query

    function checkIfPostExists():PostProps {
        // get vals from JSON
        const valsFromRecords = Object.values(Records)
        // console.log(valsFromRecords)
        // search records. if a post title match is found, 
        /// then set state for current item and stop rendering the loading screen.
        for (const data of valsFromRecords) {
            // console.log(data)
            for (const item of data) {
                // console.log(item)
                if (item.title == blogTitleToFetch) {
                    return item
                }
            }
        }
        return {title:"", date:"", content:[{"subText":""}]}
    }

    const currContent = checkIfPostExists();

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
            
            // Check if the blog data was retrieved (based on the current content title)
            // and render the page based on the result
            (currContent.title).length > 0 ?

                // If blog data retrieved...
                <div className={styles.BlogDetailView}>

                    {/* Render the blog post title and date at the top of the screen */}
                    <div className={styles.rowContainer}>
                        <div className={styles.postTitle}>{currContent.title}</div>
                        <div className={styles.postDate}>{currContent.date}</div>
                    </div>
                    <hr></hr>
                    <div className={styles.blogPostContainer}>
                    <div className={styles.blogPostContent}>
                    {/* Iterate over each of the post's subsections & render them based on defined properties */}
                    {
                        (currContent.content).map((item, index) =>

                                // If subImg exists, check if R/L/C alignment and render accordingly.
                                // Else, render as a simple postSection
                                ('subImage' in item ?
                                (
                                    <div className={styles.postSection} key={index}>
                                        {
                                            // Render subHeader if exists. Else, nothing
                                            item.subHeader ? <div className={styles.subHeader}>{item.subHeader}</div>
                                            :
                                            null
                                        }

                                            {/* Check if image needs to be aligned in the center.
                                                If yes: 
                                                    then render with the subText as the caption
                                                Else:
                                                    check if image needs to be aligned L/R */}
                                            {item.subImageAlignment == 2 && item.imgWidthAndHeight ? 

                                                <div className={styles.postImageCenter}>
                                                    {/* Set width and height based on user definition
                                                    and set style to resize image as screen size is changed */}
                                                    <div className={styles.centerImageContent}>
                                                            <Image
                                                            src={`/${currContent.title}/${item.subImage}.png`}
                                                            alt={`${item.subImageAltText}`}
                                                            width={(item.imgWidthAndHeight)[0]}
                                                            height={(item.imgWidthAndHeight)[1]}
                                                            style={{maxWidth:"100%", height:"100%", objectFit:"contain"}}
                                                            />
                                                            {(item.subText ? <div className={styles.caption}>{item.subText}</div> : null)}
                                                    </div>
                                                </div>
                                                :
                                                <div>
                                                    <div className={(item.subImageAlignment == 1) ? styles.postImageLeft : styles.postImageRight}>
                                                        <Image
                                                        src={`/${currContent.title}/${item.subImage}.png`}
                                                        alt={`${item.subImageAltText}`}
                                                        width={400}
                                                        height={400}
                                                        />
                                                    </div>
                                                    <div className={styles.subText}>{item.subText}</div>
                                                </div>
                                            }
                                        </div>
                                ) 
                                
                                :
                                
                                // If the subsection is plain text, render the subHeader (if it exists), and the subtext
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
                </div>
                </div>
                :
                <p style={{color:"white"}}>Sorry, {blogTitleToFetch} not found</p>
            }
        </main>
    )
}