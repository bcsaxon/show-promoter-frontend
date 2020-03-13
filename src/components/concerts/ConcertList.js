import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConcert } from '../../actions/concertActions';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  font-family: sans-serif;
  color: black;
  text-shadow: 2px 2px 2px gray;
  text-decoration: none;
`;

const ConcertList = ({
  concert,
  concert: { id, musician_name },
  getConcert
}) => {
  return (
    <StyledDiv>
      <Link to={`/concert/${id}`} style={{ textDecoration: 'none' }}>
        <h3 onClick={() => getConcert(concert)}>{musician_name}</h3>
      </Link>
    </StyledDiv>
  );
};

ConcertList.propTypes = {
  concert: PropTypes.object.isRequired,
  getConcert: PropTypes.func.isRequired
};

export default connect(null, { getConcert })(ConcertList);
