import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Prizes from '../components/Prizes';
import firstPrize from '../images/PrizeBadge_01.png';
import secondPrize from '../images/PrizeBadge_02.png';
import thirdPrize from '../images/PrizeBadge_03.png';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 11px;
`;


const FirstWrapper = styled.div`
  display: inline-block;
  background-size: 100%;
  background: url(${firstPrize});
  min-height: 150px;
  width: 80%;
  text-align: center;
  background-size: 95%;
  background-repeat: no-repeat;
`;

const SecondWrapper = styled.div`
  display: inline-block;
  background-size: 100%;
  background: url(${secondPrize});
  min-height: 150px;
  width: 80%;
  text-align: center;
  background-size: 95%;
  background-repeat: no-repeat;
`;

const ThirdWrapper = styled.div`
  display: inline-block;
  background-size: 100%;
  background: url(${thirdPrize});
  min-height: 150px;
  width: 80%;
  text-align: center;
  background-size: 95%;
  background-repeat: no-repeat;
`;

class PrizeContainer extends React.Component {

  render () {
    return (
      <div className='prize-container'>
        <Row>
        <Col xs={3}>
          <p className="tagline">Make Free Predictions,<br/><span className="winning">Win Cash Prizes.</span></p>
        </Col>
        <Col xs={9}>
        <Wrapper>
          <FirstWrapper>
            <p className="firstPlace">1st Place</p>
            {/* <p>50% off your check</p> */}
          </FirstWrapper>
          <SecondWrapper>
            <p className="secondPlace">2nd Place</p>
          </SecondWrapper>
          <ThirdWrapper>
          <p className="thirdPlace">3rd Place</p>
          </ThirdWrapper>
          </Wrapper>
        </Col>
        </Row>
      </div>
    )
  }
}

export default PrizeContainer;