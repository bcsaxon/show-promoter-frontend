import React from 'react';
import ConcertItem from './ConcertItem';

const Concerts = ({ concerts }) => {
  return (
    <div style={concertStyle}>
      {concerts.map(concert => (
        <ConcertItem key={concert.id} concert={concert} />
      ))}
    </div>
  );
};

const concertStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Concerts;
