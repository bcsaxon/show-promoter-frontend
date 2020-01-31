import React from 'react';
import Concert from './Concert'
const Concerts = ({ concerts }) => {
    return (
        <div style={concertStyle}>
            {concerts.map(concert => (
                <Concert key={concert.id} concert={concert} />
            ))}
        </div>
    );
}

const concertStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Concerts;
