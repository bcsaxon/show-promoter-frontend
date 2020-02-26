import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav>
            <h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/concerts'>Concerts</Link>
                    </li>
                </ul>
            </h1>
        </nav>
    );
}

export default Navbar;
