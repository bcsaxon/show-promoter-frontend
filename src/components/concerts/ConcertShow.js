import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getConcert } from '../../actions/concertActions';
import { deleteConcert, setCurrent } from '../../actions/concertActions';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const ConcertDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 20%;
  padding: 2px;
  /* border: 1px solid gray; */
  margin: 5px auto;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
  color: black;
  text-shadow: 2px 2px 2px gray;

  /* .musician-name {
    display: flex;

    font-family: sans-serif;
    color: black;
    text-shadow: 2px 2px 2px gray;
    justify-content: center;
    font-size: 40px;
  } */
`;

const Button = styled.button`
  font-family: sans-serif;
  font-size: 3vh;
  color: white;
  text-shadow: 2px 2px 2px black;
  padding: 4px 4px;
  border: none;
  border-radius: 4px;
  margin: 2px 2px;

  background: gray;
  &:hover {
    background: #545454;
  }
`;

const ConcertShow = ({ current_concert, deleteConcert, setCurrent, history }) => {
  const onDelete = () => {
    deleteConcert(current_concert.id);
    history.push('/concerts');
  };

  return (
    <ConcertDiv>
      <div className='concert'>
        <h1 className='musician-name'>{current_concert.musician_name}</h1>
        <img
          className='poster'
          src={current_concert.img_url}
          alt='Tour Poster'
          height={350}
        />
        <h3>Date: {current_concert.date}</h3>
        <h4>Venue: {current_concert.venue}</h4>
        <h5>Cost: {current_concert.cost}</h5> 
        <Button className='delete-button' onClick={onDelete}>
          Delete
        </Button>
        <Link to='/editconcert'><Button onClick={() => setCurrent(current_concert)}>Update</Button></Link> 
      </div>
    </ConcertDiv>
  );
};

ConcertShow.propTypes = {
  current_concert: PropTypes.object.isRequired,
  deleteConcert: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  // getConcert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current_concert: state.concert.current_concert
});

export default connect(mapStateToProps, { deleteConcert, setCurrent })(ConcertShow);
