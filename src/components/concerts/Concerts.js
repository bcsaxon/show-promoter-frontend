import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ConcertList from './ConcertList';
import { getConcerts } from '../../actions/concertActions';
import PropTypes from 'prop-types';

const Concerts = ({ concert: { concerts, loading }, getConcerts }) => {
  useEffect(() => {
    getConcerts();
    //eslint-disable-next-line
  }, []);

  if (loading || concerts === null) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <ul>
      <li>
        <h4>All Concerts</h4>
      </li>
      {!loading && concerts.length === 0 ? (
        <p>No concerts to show...</p>
      ) : (
        concerts.map(concert => (
          <ConcertList concert={concert} key={concert.id} />
        ))
      )}
    </ul>
  );
};

Concerts.propTypes = {
  concert: PropTypes.object.isRequired,
  getConcerts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  concert: state.concert
});

export default connect(mapStateToProps, { getConcerts })(Concerts);
