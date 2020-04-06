import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import ConcertsContainer from './containers/ConcertsContainer';
import ConcertInput from './components/concerts/ConcertInput';
import Concerts from './components/concerts/Concerts';
import ConcertShow from './components/concerts/ConcertShow';
import About from './components/pages/About';
import EditConcert from './components/concerts/EditConcert';

// const theme = {
//   display: 'flex',
//   align: 'center'
// };

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ConcertInput} />
          <Route exact path='/concerts' component={Concerts} />
          {/* <Route exact path='/concerts' component={ConcertList} /> */}
          <Route exact path='/about' component={About} />
          <Route exact path='/concert/:id' component={ConcertShow} />
          <Route exact path='/editconcert' component={EditConcert} />
          {/* <ConcertsContainer /> */}
        </Switch>
      </>
    </Router>
  );
};

export default App;
