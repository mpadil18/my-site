// To inform next js, this is a client component 
"use client"; 

import "./navbar.css"
import {useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    const [mobileView, setMobileView] = useState(typeof window !== 'undefined' && typeof screen !== 'undefined' ? screen.width <= 900 : false);
    const [visibleMenuButtons, setVisibleMenuButtons] = useState(false);

    const handleResize = () => {
        if (typeof window !== 'undefined' && typeof screen !== 'undefined') {
            setMobileView((screen.width <= 900));
            setVisibleMenuButtons(false);
        }
    }

    function handleClickMenu(): void {
        visibleMenuButtons ? setVisibleMenuButtons(false) : setVisibleMenuButtons(true);
    }

    function handleNavMenu(): void {
        setVisibleMenuButtons(false);
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
            <div className="menu-container">
            <Image 
                src="/my-site/Menu.svg"
                alt="Hamburger Menu"
                width={90}
                height={90}
                className={"hamburgerMenu"}
                onClick={handleClickMenu}
            />

{            visibleMenuButtons ? 

            <div className="nav-buttons">
                <Link href="/" legacyBehavior><a onClick={handleClickMenu} style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Home</p></a></Link>
                <Link href="/code" legacyBehavior><a onClick={handleClickMenu} style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Code</p></a></Link>
                <Link href="/blog" legacyBehavior><a onClick={handleClickMenu} style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Blog</p></a></Link>
                <Link href="/art" legacyBehavior><a onClick={handleClickMenu} style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Art</p></a></Link>
                <Link href="/mochampa" legacyBehavior><a onClick={handleClickMenu} style={{ textDecoration: 'none', color: 'white' }}><p className="Nav-Button">Mocha Map</p></a></Link>
            </div>

            :

            null}
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