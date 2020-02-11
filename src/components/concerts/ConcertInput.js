import React, { Component } from 'react';

export class ConcertInput extends Component {
  state = {
    musician_name: '',
    date: '',
    venue: '',
    img_url: '',
    cost: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='concert-input'>
        <form className='concert-input-form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='musician_name'
            placeholder='Musician...'
            value={this.state.musician_name}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='venue'
            placeholder='Venue...'
            value={this.state.venue}
            onChange={this.onChange}
          />
          <input
            type='date'
            name='date'
            value={this.state.date}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='img_url'
            placeholder='Poster URL...'
            value={this.state.img_url}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='cost'
            placeholder='Cost...'
            value={this.state.cost}
            onChange={this.onChange}
          />
          <input type='submit' name='submit' />
        </form>
      </div>
    );
  }
}

export default ConcertInput;
