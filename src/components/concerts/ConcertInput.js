import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addConcert } from '../../actions/concertActions';

const ConcertInput = ({ addConcert }) => {
  // state = {
  //   musician_name: '',
  //   date: '',
  //   venue: '',
  //   img_url: '',
  //   cost: ''
  // };
  const [musician_name, setMusician] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [img_url, setImage] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const newConcert = {
      musician_name,
      date,
      venue,
      img_url,
      cost
    };

    addConcert(newConcert);

    setMusician('');
    setDate('');
    setVenue('');
    setImage('');
    setCost('');
  };

  // const onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  return (
    <div className='concert-input'>
      <h3>Input your concert below!</h3>
      <form className='concert-input-form' onSubmit={onSubmit}>
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
      </form>
    </div>
  );
};

ConcertInput.propTypes = {
  addConcert: PropTypes.func.isRequired
};

export default connect(null, { addConcert })(ConcertInput);
