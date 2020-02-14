import React from 'react';
import { Link } from 'react-router-dom'

const ConcertItem = ({
  concert: { musician_name, id }
}) => {
  return (
    <div>
      {/* Concert Component */}
      <Link to={`/concert/${id}`}><h3>{musician_name}</h3></Link>
    </div>
  );
};

export default ConcertItem;
