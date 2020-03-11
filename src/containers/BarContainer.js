import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeaderboardContainer from '../containers/LeaderboardContainer';
import ScoreContainer from '../containers/ScoreContainer';
import PrizeContainer from '../containers/PrizeContainer';
import $ from 'jquery';

class BarContainer extends React.Component {

  componentDidMount() {
    if ($badger && $badger.active()) {
      console.log("Badger is active!");
    } else {
      console.log($badger);
      console.log("What the hell is badger");
    }
  }

  render () {
    return (
      <div className='bar-container'>
        <Row>
          <Col xs={3}>
            <LeaderboardContainer />
          </Col>
          <Col xs={9}>
            <ScoreContainer platform={window.location.href.includes('xfinity') ? 'xfinity' : 'venue'}/>
            <PrizeContainer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BarContainer;