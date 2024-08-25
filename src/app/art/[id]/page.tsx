// To inform next js, this is a client component 
"use client"; 

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Records from "../../../data/art_posts.json"
import { useState, useEffect } from "react";

import styles from "./page.module.css"

// Defining all optional/non-optional properties that a single Art post can have.
// A post's content is represented by an array of subsections.
interface PostProps {
    art_post_id: number;
    title: string;
    date: string;
    subtext_sections: Array<string>;
    alt: string;
    tags?: Array<string>;
    
}

export const dynamicParams = false

// export function generateStaticParams() {
//     return [{ id: 'Sonic_Says_Happy_Chilli_Dog_Day' }, { id: 'Mr._E_Mage_&_Audrey_Meditate_in_the_Woods' }, { id: 'Espathra' }, {id: 'Strawberry_Shortcake'}, { id: 'Ramattra'}, {id: 'A_World_of_Hassle'}]
//   }
   

export default function ArtDetailView() {
    // const { id } = params
    const artTitleToFetch = usePathname().replaceAll("/art/", "").replaceAll("_", " ")
    const [currContent, setCurrContent] = useState<PostProps>({art_post_id: -1, title: "", date: "", subtext_sections: [], alt: ""});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkIfPostExists();
    })

    // Function checks JSON file for the blog post title in the URL.
    // Regardless of whether records are found in the end, loading will cease.
    // TODO: replace this with a PSQL query
    function checkIfPostExists():void {
        if (artTitleToFetch) {
            // get vals from JSON
            const valsFromRecords = Object.values(Records)
            console.log(valsFromRecords)
            // search records. if a post title match is found, 
            /// then set state for current item and stop rendering the loading screen.
            for (const data of valsFromRecords) {
                console.log(data)
                for (const item of data) {
                    console.log(item)
                    if (item.title == artTitleToFetch) {
                        setCurrContent(item)
                        setLoading(false)
                        return;
                    }
                }
            }
        }
        setLoading(false)
    }

    return (
        <main>
            <div className={styles.headerAbout}>Art<hr></hr></div>
            {loading ?

            <p style={{color:"white"}}>loading</p> 

            :

            (currContent.art_post_id >= 0) ?

                <div className={styles.ArtDetailView}>
                    <div className={styles.rowContainer}>
                    <Image
                                src={`/art_images/${currContent.art_post_id}.png`}
                                alt={`${currContent.alt}`}
                                width={350}
                                height={350}
                                className={styles.artPostImage}
                                style={{     width: '70vh',
                                    height: '70vh',
                                    maxWidth: '50vw',
                                    maxHeight: '50vw' }}
                    />
                    <div className={styles.artDetailViewText}>
                        <div className={styles.sideHeading}>
                            <div className={styles.artPostTitle}>{currContent.title}</div>
                            <div className={styles.artPostDate}>{currContent.date}</div>
                        </div>
                        {
                            (currContent.subtext_sections).map((item, index) => 
                                (
                            
                                <p className={styles.artDetailViewSubText} key={index}>
                                    {item}
                                </p>
                                )
                            )
                        }
                    </div>
                    </div>
                </div>

                :
                <p style={{color:"white"}}>Sorry, {artTitleToFetch} not found</p>

            }
        </main>
    )
}