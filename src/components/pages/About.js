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
  border: 1px solid gray;

  .title {
    font-size: 45px;
    justify-content: center;
    vertical-align: middle;
    padding: 10px;
  }

  .bio {
   
    font-size: 25px;
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

// const H1 = styled.h1`
//   font-size: 45px;
//   justify-content: center;
//   /* vertical-align: middle; */
//   padding: 10px;
// `;
// const P1 = styled.p`
//   font-size: 20px;
//   /* text-align: justify; */
//   justify-content: center;
//   /* vertical-align: middle; */
//   padding: 18px;
// `;

// const P2 = styled.p`
//   font-size: 10px;
//   text-align: justify;
//   /* justify-content: center; */
//   /* vertical-align: middle; */
//   padding: 30px;
// `;
const About = () => {
  return (
    <StyledAbout>
      <Fragment>
        <h1 className='title'>About This App</h1>
        <p className='bio'>
          This app allows fans and bands to post upcoming concerts.
        </p>
        <p className='version'>Version 1.0.0</p>
      </Fragment>
    </StyledAbout>
  );
};

export default About;
