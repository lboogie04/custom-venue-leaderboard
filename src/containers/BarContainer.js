import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeaderboardContainer from '../containers/LeaderboardContainer';
import ScoreContainer from '../containers/ScoreContainer';
import PrizeContainer from '../containers/PrizeContainer';

class BarContainer extends React.Component {

  render () {
    return (
      <div className='bar-container'>
        <Row>
          <Col xs={3}>
            <LeaderboardContainer />
          </Col>
          <Col xs={9}>
            <ScoreContainer platform={window.location.href.includes('x1') ? 'x1' : 'venue'}/>
            <PrizeContainer />
            <h1>hello</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BarContainer;