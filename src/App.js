import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ConcertsContainer from './containers/ConcertsContainer';
import ConcertInput from './components/concerts/ConcertInput';
import Concerts from './components/concerts/Concerts';
import About from './components/pages/About';
import axios from 'axios';

export class App extends Component {
  state = {
    concerts: []
  };
  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/concerts');
    this.setState({ concerts: res.data });
  }

  render() {
    return (
      <Router>
        <>
          <Switch>
          <Navbar />
          <ConcertsContainer />
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <ConcertInput />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
          </Switch>

          <Concerts concerts={this.state.concerts} />
        </>
      </Router>
    );
  }
}

export default App;
