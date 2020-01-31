import React from 'react';

const Concert = ({ concert }) => {
  return (
    <div>
      {/* Concert Component */}
      <h1>{concert.musician_name}</h1>
      <img src={concert.img_url} alt='Tour Poster' />
      <h4>{concert.venue}</h4>
    </div>
  );
};

export default Concert;
