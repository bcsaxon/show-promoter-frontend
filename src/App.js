import React from 'react';
import './App.css';
import ConcertsContainer from './containers/ConcertsContainer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <h2>Welcome</h2>
        <ConcertsContainer />
      </header>
    </div>
  );
}

export default App;
