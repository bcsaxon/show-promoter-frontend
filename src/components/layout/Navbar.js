import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: gray;
  color: white;

  height: 12vh;

  .logo {
    font-family: sans-serif;
    font-size: 7vh;
    /* align-items: left;  */
    font-weight: bold;
    text-shadow: 3px 3px 3px black;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 35vw;
    align-items: center;

    list-style: none;
  }

  .link {
    font-family: sans-serif;
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    text-shadow: 2px 2px 2px black;
    &:hover {
      color: #F9D9D9;
    }
  }
`;

const Navbar = props => {
  return (
    <StyledNavbar>
      <div className='logo'>Show Promoter</div>
      <nav>
        <h1>
          <ul className='nav-links'>
            <li>
              <Link to='/' className='link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='link'>
                About
              </Link>
            </li>
            <li>
              <Link to='/concerts' className='link'>
                Concerts
              </Link>
            </li>
          </ul>
        </h1>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
