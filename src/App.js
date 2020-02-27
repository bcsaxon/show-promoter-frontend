import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ConcertsContainer from './containers/ConcertsContainer';
import ConcertInput from './components/concerts/ConcertInput';
import Concerts from './components/concerts/Concerts';
import Concert from './components/concerts/Concert';
import About from './components/pages/About';

const App = () => {
  //Concert Detail Page Get Request //
  // const getConcert = async id => {
  //   const res = await fetch(`/concerts/${id}`);
  //   console.log(res.data);
  //   this.setState({ concert: res.data });
  // };

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
              </Fragment>
            )}
          />
          <Route exact path='/concerts' component={Concerts} />
          <Route exact path='/about' component={About} />
          <Route exact path='/concert/:id' component={Concert} />
          {/* render={props => ( */}
          {/* <Concert
                {...props}
                getConcert={this.getConcert}
                concert={this.props.concert}
              />
            )} */}

          {/* <ConcertsContainer /> */}
        </Switch>
      </>
    </Router>
  );
};

export default App;
