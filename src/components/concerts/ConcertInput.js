import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addConcert } from '../../actions/concertActions';
import styled from 'styled-components';

const StyledForm = styled.form`
  input {
    display: flex;
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    border: 2px solid grey;
    outline: none;
    :hover {
      border: 2px solid black;
    }
    box-sizing: border-box;
    color: black;
  }
`;

const H3 = styled.h3`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  justify-content: center;
  font-family: sans-serif;
  font-size: 8vh;
  color: black;
  text-shadow: 2px 2px 2px gray;
  padding: 5px;
`;

const ConcertInput = ({ addConcert }) => {
  const [musician_name, setMusician] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [img_url, setImage] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newConcert = {
      musician_name,
      date,
      venue,
      img_url,
      cost,
    };

    addConcert(newConcert);

    setMusician('');
    setDate('');
    setVenue('');
    setImage('');
    setCost('');
  };

  return (
    <div className='concert-input'>
      <H3>Input your concert below...</H3>

      <StyledForm className='concert-input-form' onSubmit={onSubmit}>
        <input
          type='text'
          name='musician_name'
          placeholder='Musician...'
          value={musician_name}
          onChange={(e) => setMusician(e.target.value)}
        />
        <input
          type='text'
          name='venue'
          placeholder='Venue...'
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='text'
          name='img_url'
          placeholder='Poster URL...'
          value={img_url}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type='text'
          name='cost'
          placeholder='Cost...'
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <input type='submit' name='submit' />
      </StyledForm>
    </div>
  );
};

ConcertInput.propTypes = {
  addConcert: PropTypes.func.isRequired,
};

export default connect(null, { addConcert })(ConcertInput);
