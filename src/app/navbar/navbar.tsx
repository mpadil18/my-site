// To inform next js, this is a client component 
"use client"; 

import "./navbar.css"
import {useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    const [mobileView, setMobileView] = useState(screen.width <= 900);

    const handleResize = () => {
        setMobileView((screen.width <= 900));
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    return (
        mobileView ?
        <div className="Menu">
            <h3 className="site-name">Maritza Padilla</h3>
            <div>
            <Image 
                src="/my-site/Menu.svg"
                alt="Hamburger Menu"
                width={100}
                height={100}
            />
            {/* <div className="nav-buttons">
                <Link href="/" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Home</p></Link>
                <Link href="/code" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Code</p></Link>
                <Link href="/blog" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Blog</p></Link>
                <Link href="/art" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Art</p></Link>
                <Link href="/mochamap" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Mocha Map</p></Link>
            </div> */}
            </div>
        </div>
        
        :
        
        <div className="Navbar">
            <h3 className="site-name">Maritza Padilla</h3>
            <div className="nav-buttons">
                <Link href="/" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Home</p></Link>
                <Link href="/code" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Code</p></Link>
                <Link href="/blog" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Blog</p></Link>
                <Link href="/art" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Art</p></Link>
                <Link href="/mochamap" style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Mocha Map</p></Link>
            </div>
        </div>
    )
}