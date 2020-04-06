import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { updateConcert } from '../../actions/concertActions';

///STYLED
const StyledForm = styled.form`
  input {
    display: flex;
    /* justify-content: center; */
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

const EditConcert = ({ current, updateConcert }) => {
  const [musician_name, setMusician] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [img_url, setImage] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    if (current) {
      setMusician(current.musician_name);
      setDate(current.date);
      setVenue(current.venue);
      setImage(current.img_url);
      setCost(current.cost);
    }
  }, [current]);
  const onSubmit = e => {
    e.preventDefault();

    const updatedConcert = {

      musician_name,
      date,
      venue,
      img_url,
      cost,
      id: current.id
    };

    updateConcert(updatedConcert);

    setMusician('');
    setDate('');
    setVenue('');
    setImage('');
    setCost('');
  };

  return (
    <div className='concert-input'>
      <H3>Edit your concert...</H3>

      <StyledForm className='concert-input-form' onSubmit={onSubmit}>
        <input
          type='text'
          name='musician_name'
          placeholder='Musician...'
          value={musician_name}
          onChange={e => setMusician(e.target.value)}
        />
        <input
          type='text'
          name='venue'
          placeholder='Venue...'
          value={venue}
          onChange={e => setVenue(e.target.value)}
        />
        <input
          type='date'
          name='date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          type='text'
          name='img_url'
          placeholder='Poster URL...'
          value={img_url}
          onChange={e => setImage(e.target.value)}
        />
        <input
          type='text'
          name='cost'
          placeholder='Cost...'
          value={cost}
          onChange={e => setCost(e.target.value)}
        />
        <input type='submit' name='submit' />
      </StyledForm>
    </div>
  );
};

EditConcert.propTypes = {
  current: PropTypes.object,
  updateConcert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.concert.current
});

export default connect(mapStateToProps, { updateConcert })(EditConcert);
