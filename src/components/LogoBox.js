import React from 'react';
import { Row, Col } from 'react-bootstrap';
import kings_prize from '../images/kings_prize.png';

class LogoBox extends React.Component {
  render() {
    return (
      <div className='prizes'>
        <Row>
          <Col xs={3}>
            <img src={kings_prize} className="prize-logo" alt="prize-image" />
          </Col>
          <Col xs={3}>
            <img src={kings_prize} className="prize-logo" alt="prize-image" />
          </Col>
          <Col xs={3}>
            <img src={kings_prize} className="prize-logo" alt="prize-image" />
          </Col>
          <Col xs={3}>
            <img src={kings_prize} className="prize-logo" alt="prize-image" />
          </Col>
        </Row>
      </div>
      
    )
  }
}

export default LogoBox;