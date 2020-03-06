import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import ConcertsContainer from './containers/ConcertsContainer';
import ConcertInput from './components/concerts/ConcertInput';
import Concerts from './components/concerts/Concerts'
import ConcertShow from './components/concerts/ConcertShow';
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
          {/* <Route exact path='/concerts' component={ConcertList} /> */}

          <Route exact path='/about' component={About} />
          <Route exact path='/concert/:id' component={ConcertShow} />

          {/* <ConcertsContainer /> */}
        </Switch>
      </>
    </Router>
  );
};

export default App;
