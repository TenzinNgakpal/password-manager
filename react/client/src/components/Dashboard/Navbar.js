import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return ( 
            
            <nav className="nav">
                <Link to="/" className="site-title">Password Manager</Link>
                <ul>
                    <Link className="nav-links" to="/about"> <li> About </li> </Link>
                    <Link className="nav-links" to="/password-input"> <li> Password Input </li> </Link>
                    <Link className="nav-links" to="/password-manager"> <li> Password Manager </li> </Link>
                </ul>
                
            </nav>
        )
    }
}

export default Navbar;