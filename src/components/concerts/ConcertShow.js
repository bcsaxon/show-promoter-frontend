import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ConcertShow = ({ current_concert }) => {
  // const concert = current_concert

  // const [musician_name, setName] = useState('')

  // useEffect(() => {
  //   getConcert(concert);
  // }, [concert]);

  // componentDidMount() {
  //   this.props.getConcert(this.props.match.params.id);
  // }

  // const { musician_name, venue, date, img_url, cost } = this.props.concert;

  return (
    <div>
      <h1>{current_concert.musician_name}</h1>
      <img src={current_concert.img_url} alt='Tour Poster' />
      <h4>{current_concert.venue}</h4>
      <h3>{current_concert.date}</h3>
      <h2>{current_concert.cost}</h2>
      <button>Delete</button>
    </div>
  );
};

ConcertShow.propTypes = {
  current_concert: PropTypes.object
};

const mapStateToProps = state => ({
  current_concert: state.concert.current_concert
});

export default connect(mapStateToProps)(ConcertShow);
