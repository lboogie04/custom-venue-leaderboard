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

  state = {
    isLoading: false,
    match: {},
    gameStarted: false

};

  componentDidMount() {
    if (this.props.platform === 'xfinity') {
      this.fetchMatch();
      this.timer = setInterval(() => this.fetchMatch(), 19000);
    }
  }

  fetchMatch() {

    //Fetching from GAMEON
    const url = 'https://gameon.app/api/v1/get_match';
    let fetchData = { 
      method: 'POST', 
      body: {match_id: 10348},
      headers: new Headers()
    }

    let currentComponent = this;
    this.setState({isLoading: true});
    fetch(url, fetchData)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log("~~~~~~Data from prize box", data);
        currentComponent.setState({
          match: data,
          isLoading: false})
      })

    //Fetching from SportsData
    // const url = 'https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019POST/4?key=10a1c8e6450b4be7a01a81026bbc78f0';
    // let fetchData = { 
    //   method: 'GET', 
    //   // body: {match_id: 7283},
    //   headers: new Headers()
    // }

    // this.setState({isLoading: true});
    // fetch(url, fetchData)
    //   .then((resp) => resp.json())
    //   .then(function(data) {
    //     console.log(data[0])
    //     currentComponent.setState({
    //       match: data[0],
    //       gameStarted: data[0].Status === 'Scheduled' ? false : true,
    //       isLoading: false})
    //   })
  }

  render () {
    const { platform } = this.props;
    if (platform === 'xfinity') return (
      <div className='prize-container'>
        <div className='x1-score-container'>
          <Row>
        <Col xs={3} className="x1-team-logo">
        <img src="https://upload.wikimedia.org/wikipedia/it/f/f1/Oakland_Raiders_logo.png" className="prize-container-logo" alt="gameon-logo" />
        </Col>
        <Col xs={3} >
        <Row className='prize-score-box'> <span>{this.state.match.AwayScore || this.state.match.visitor_team_points || 0}</span></Row>
        </Col>
        <Col xs={3} className="x1-team-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/460px-San_Francisco_49ers_logo.svg.png" className="prize-container-logo-width" alt="gameon-logo" />
        </Col>
        <Col xs={3}>
        <Row className='prize-score-box'><span>{this.state.match.HomeScore || this.state.match.home_team_points || 0}</span></Row>
        </Col>
        </Row>
        </div>
        </div>)
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