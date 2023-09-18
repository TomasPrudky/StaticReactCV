
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Navbar() {

    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul>
                    <Link activeClass="active" to="page1" spy={true} smooth={true} offset={50} duration={500}>
                        <li className="nav-item">Home</li>                        
                    </Link>
                    <Link activeClass="active" to="page2" spy={true} smooth={true} offset={50} duration={500}>
                        <li className="nav-item">About</li>
                    </Link>
                    <Link activeClass="active" to="page3" spy={true} smooth={true} offset={50} duration={500}>
                        <li className="nav-item">Education</li>                        
                    </Link>
                    <Link activeClass="active" to="page4" spy={true} smooth={true} offset={50} duration={500}>
                        <li className="nav-item"> Projects</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar