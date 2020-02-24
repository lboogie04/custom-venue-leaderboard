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
      {/* <header className="App-header">
        <Row className='top-section'>
          <Col xs={8}>
            <Score />
          </Col>
          <Col>
            <Leaderboard />
          </Col>
        </Row>
        <Row className='prize-section'>
          <LogoBox />
        </Row>
      </header> */}
    </div>
  );
}

export default App;
