import React, { Component } from 'react';
import ConcertsContainer from './containers/ConcertsContainer';
import Navbar from './components/layout/Navbar';
import Concerts from './components/Concerts'
import axios from 'axios'
import './App.css';

export class App extends Component {
  state = {
    concerts: []
  }
  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/concerts')
    this.setState({ concerts: res.data })
  }

  render() {
    return (
      <Navbar />, 
      <ConcertsContainer />,
      <Concerts concerts={this.state.concerts} />  
    );
  }
}

export default App;


