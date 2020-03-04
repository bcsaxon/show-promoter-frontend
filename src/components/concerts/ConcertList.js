import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConcert } from '../../actions/concertActions';




const ConcertList = ({ concert, concert: { id, musician_name }, getConcert }) => {
  return (
    <div>
      <Link to={`/concert/${id}`}>
        <h3 onClick={() => getConcert(concert)}>{musician_name}</h3>
      </Link>
    </div>
  );
};

ConcertList.propTypes = {
  concert: PropTypes.object.isRequired,
  getConcert: PropTypes.func.isRequired
};

export default connect(null, { getConcert })(ConcertList);
