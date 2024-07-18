// To inform next js, this is a client component 
"use client"; 

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import styles from "./page.module.css"

export default function BlogDetailView() {
    const searchParams = useSearchParams()
 
    const search = searchParams.get('search')
    let property1 = searchParams.get("id");
    return (
        <main>
            <div className={styles.BlogDetailView}>
                <div className={styles.columnContainer}>
                    <div className={styles.postHeader}></div>
                    <p style={{color:"white"}}>Hello world {property1}</p>
                    <div className={styles.postDate}></div>
                </div>
                <hr></hr>
                
            </div>
        </main>
    )
}