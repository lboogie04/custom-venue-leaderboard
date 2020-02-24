import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeaderboardContainer from '../containers/LeaderboardContainer';

class BarContainer extends React.Component {

  render () {
    return (
      <div className='bar-container'>
        <Row>
          <Col xs={3}>
            <LeaderboardContainer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BarContainer;