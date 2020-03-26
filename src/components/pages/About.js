import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  justify-content: center;
  font-family: sans-serif;
  color: black;
  text-shadow: 2px 2px 2px gray;
  padding: 5px;

  .title {
    font-size: 45px;
    justify-content: center;
    vertical-align: middle;
    padding: 10px;
  }

  .bio {
    font-size: 20px;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    padding: 10px;
  }
  .version {
    font-size: 15px;
    justify-content: center;
    vertical-align: middle;
    padding: 10px;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <Fragment>
        <h1 className='title'>About This App</h1>
        <p className='bio'>
          Show Promoter allows fans and bands to post upcoming concerts,
          inspired by other DIY sites like: Oh My Rockness, Show List Austin,
          and Songkick.
        </p>
        <p className='version'>Version 1.0.0</p>
      </Fragment>
    </StyledAbout>
  );
};

export default About;
