import React from 'react';
import { Link } from 'react-router-dom'

const ConcertItem = ({
  concert: { musician_name, img_url, venue, date, cost, id }
}) => {
  return (
    <div>
      {/* Concert Component */}
      <Link to={`/concert/${id}`}><h1>{musician_name}</h1></Link>
       {/* <img src={img_url} alt='Tour Poster' /> */}
      {/* <h4>{venue}</h4> */}
      <h3>{date}</h3>
      {/* <h2>{cost}</h2>  */}
    </div>
  );
};

export default ConcertItem;
