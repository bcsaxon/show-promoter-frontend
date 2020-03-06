import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getConcert } from '../../actions/concertActions';
import { deleteConcert } from '../../actions/concertActions';

const ConcertShow = ({ current_concert, deleteConcert, history }) => {
  const onDelete = () => {
    deleteConcert(current_concert.id);
    history.push('/concerts');
  };

  return (
    <div>
      <h1>{current_concert.musician_name}</h1>
      <img src={current_concert.img_url} alt='Tour Poster' />
      <h4>{current_concert.venue}</h4>
      <h3>{current_concert.date}</h3>
      <h2>{current_concert.cost}</h2>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

ConcertShow.propTypes = {
  current_concert: PropTypes.object.isRequired,
  deleteConcert: PropTypes.func.isRequired
  // getConcert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current_concert: state.concert.current_concert
});

export default connect(mapStateToProps, { deleteConcert })(ConcertShow);
