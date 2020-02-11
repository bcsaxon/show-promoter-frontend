import React from 'react';

const Concert = ({
  concert: { musician_name, img_url, venue, date, cost }
}) => {
  return (
    <div>
      {/* Concert Component */}
      <h1>{musician_name}</h1>
      <img src={img_url} alt='Tour Poster' />
      <h4>{venue}</h4>
      <h3>{date}</h3>
      <h2>{cost}</h2>
    </div>
  );
};

export default Concert;
