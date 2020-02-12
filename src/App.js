import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ConcertsContainer from './containers/ConcertsContainer';
import ConcertInput from './components/concerts/ConcertInput';
import Concerts from './components/concerts/Concerts';
import Concert from './components/concerts/Concert';
import About from './components/pages/About';
import axios from 'axios';

export class App extends Component {
  state = {
    concerts: [],
    concert: {}
  };

  // Get all Concerts //
  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/concerts');
    this.setState({ concerts: res.data });
  }

  //Concert Detail Page Get Request //
  getConcert = async id => {
    const res = await axios.get(`http://localhost:3000/concerts/${id}`);
    console.log(res.data);
    this.setState({ concert: res.data });
  };

  render() {
    const { concerts, concert } = this.state;
    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <ConcertInput />
                  <Concerts concerts={concerts} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/concert/:id'
              render={props => (
                <Concert
                  {...props}
                  getConcert={this.getConcert}
                  concert={concert}
                />
              )}
            />
            {/* <ConcertsContainer /> */}
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
