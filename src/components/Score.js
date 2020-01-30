import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Countdown from './Countdown';
import styled from 'styled-components';

import Gameon_White from '../images/Gameon_White.png';
import Toms_Watch_Bar from '../images/Toms_Watch_Bar.png';
import sharks from '../images/team-logos/sharks.png';
import kings_logo from '../images/team-logos/kings_logo.png';


const logoStyle = {
  marginTop: '10%'
};

const lasPlay = {
  textAlign: 'center',
  display: 'block',
  marginTop: '0',
  marginLeft: '10px'
}

const weirdLogo = {
  width: '200px',
  paddingTop: '45px'
}

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        match: {},
        gameStarted: false

    };

    this.fetchMatch = this.fetchMatch.bind(this);
    this.properSuffix = this.properSuffix.bind(this);
  }

  componentDidMount() {
    this.fetchMatch();
    this.timer = setInterval(() => this.fetchMatch(), 19000);
  }

  fetchMatch() {

    //Fetching from GAMEON
    // const url = 'https://gameon.app/api/v1/get_match';
    // let fetchData = { 
    //   method: 'POST', 
    //   body: {match_id: 8332},
    //   headers: new Headers()
    // }

    let currentComponent = this;
    // this.setState({isLoading: true});
    // fetch(url, fetchData)
    //   .then((resp) => resp.json())
    //   .then(function(data) {
    //     console.log(data)
    //     currentComponent.setState({
    //       match: data,
    //       isLoading: false})
    //   })

    //Fetching from SportsData
    const url = 'https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019POST/4?key=10a1c8e6450b4be7a01a81026bbc78f0';
    let fetchData = { 
      method: 'GET', 
      // body: {match_id: 7283},
      headers: new Headers()
    }

    this.setState({isLoading: true});
    fetch(url, fetchData)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data[0])
        currentComponent.setState({
          match: data[0],
          gameStarted: data[0].Status === 'Scheduled' ? false : true,
          isLoading: false})
      })
  }

  startTimer(duration, display) {
    let currentComponent = this;
    var timer = duration, minutes, seconds;
    var countDownDate = new Date("Feb 02, 2020 18:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // minutes = parseInt(timer / 60, 10)
        // seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
        display.innerHTML += "<br/> til puck drops"

    if (distance < 0) {
      clearInterval(x);
      currentComponent.setState({gameStarted: true})
      // document.querySelector('#time').innerHTML = "EXPIRED";
    }
    }, 1000);
  }

  properSuffix(int) {
    switch(int) {
      case("1"):
        return "1st"
       case("2"):
        return "2nd"
       case("3"):
        return "3rd"
      case("4"):
        return "4th"
      case("HALF"):
        return "Halftime"
    }
  }

  render() {
    let gameStatus = this.state.match.status === "Pending" || this.state.gameStarted === true ? 
                      <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col> :
                      <Col className='time-period-block' xs={2}><span id="time">{this.properSuffix(this.state.Period)}<br/>Quarter</span></Col>
    return (
      <div className='score-section'>
        <Row className='logos'>
          <span>
            <img src={Gameon_White} className="gameon-logo" alt="gameon-logo" />
            @
            <img src={Toms_Watch_Bar} className="toms-logo" alt="toms-logo" />
          </span>
        </Row>

        <Row className='teams'>
         <Col xs={5}>
           <Row className='team-block'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/2560px-San_Francisco_49ers_logo.svg.png" className="team-logo-vertical" alt="gameon-logo" />
           </Row>
           <Row className='score-block'> <span>{this.state.match.AwayTeamScore || 0}</span></Row>
         </Col>
         
         {/* {gameStatus} */}
         <Col className='time-period-block' xs={2}><span id="time">
           {!this.state.gameStarted && <Countdown suffix="til puck drops"/>}
          {this.properSuffix(this.state.match.Quarter)}<br/>{this.state.gameStarted ? 'Quarter' : ''}</span>
          </Col>
         {/* <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col> */}

         <Col xs={5}>
           <Row className='team-block'>
           <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/2560px-Kansas_City_Chiefs_logo.svg.png" className="team-logo" alt="gameon-logo" style={weirdLogo} />
           </Row>
           <Row className='score-block'><span>{this.state.match.HomeTeamScore || 0}</span></Row>
         </Col>
        </Row>
        <Row style={lasPlay}>
          <h3 className="download-instruction">1. Download at Gameon.app/Toms</h3>
          <h3 className="download-instruction">2. Click "Play at the bar" & enter the bar code:</h3>
          <h3 className="bar-code">TOMSBOWL</h3>
        </Row>


      </div>
    )
  }
};

export default Score;