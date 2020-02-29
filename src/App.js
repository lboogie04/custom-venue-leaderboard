import React from 'react';
// import logo from './logo.svg';
import Score from './components/Score';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import Leaderboard from './components/Leaderboard';
import LogoBox from './components/LogoBox';
import BarContainer from './containers/BarContainer';

function App() {
  return (
    <div className="App">
      <BarContainer />
    </div>
  );
}

export default App;
