import "./navbar.css"
export default function Navbar() {
    return (
        <div className="Navbar">
            <h3 className="site-name">Maritza Padilla</h3>
            <div className="nav-buttons">
                <p className="Nav-Button">Home</p>
                <p className="Nav-Button">Code</p>
                <p className="Nav-Button">Blog</p>
                <p className="Nav-Button">Art</p>
                <p className="Nav-Button">Mocha Map</p>
            </div>
        </div>
    )
}