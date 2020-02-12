import React, { Component } from 'react';

export class Concert extends Component {
  componentDidMount() {
    this.props.getConcert(this.props.match.params.id);
  }
  render() {
    const { musician_name, venue, date, img_url, cost } = this.props.concert;

    return (
      <div>
        <h1>{musician_name}</h1>
        <img src={img_url} alt='Tour Poster' />
        <h4>{venue}</h4>
        <h3>{date}</h3>
        <h2>{cost}</h2>
      </div>
    );
  }
}

export default Concert;
