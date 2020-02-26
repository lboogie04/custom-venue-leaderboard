import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeaderboardContainer from '../containers/LeaderboardContainer';
import ScoreContainer from '../containers/ScoreContainer';

class BarContainer extends React.Component {

  render () {
    return (
      <div className='bar-container'>
        <Row>
          <Col xs={3}>
            <LeaderboardContainer />
          </Col>
          <Col xs={9}>
            <ScoreContainer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BarContainer;