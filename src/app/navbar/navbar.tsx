// To inform next js, this is a client component 
"use client"; 

import "./navbar.css"
import Link from 'next/link'

export default function Navbar() {
    return (
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