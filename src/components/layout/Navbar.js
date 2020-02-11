import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div>
            <h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </h1>
        </div>
    );
}

export default Navbar;
