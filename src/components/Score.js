import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gameon_White from '../images/Gameon_White.png';
import Toms_Watch_Bar from '../images/Toms_Watch_Bar.png';
import nashville_logo from '../images/team-logos/nashville_logo.png';
import kings_logo from '../images/team-logos/kings_logo.png';
import colts from '../images/team-logos/colts.png';
import kc from '../images/team-logos/kc.png';


const logoStyle = {
  marginTop: '10%'
};

const lasPlay = {
  textAlign: 'center',
  display: 'block'
}

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        match: {}
    };

    this.fetchMatch = this.fetchMatch.bind(this);
    this.properSuffix = this.properSuffix.bind(this);
  }

  componentDidMount() {
    this.fetchMatch();
    // this.timer = setInterval(() => this.fetchMatch(), 15000);
    // var fiveMinutes = 60 * 5,
    // display = document.querySelector('#time');
    // this.startTimer(fiveMinutes, display);
  }

  fetchMatch() {

    //Fetching from GAMEON
    // const url = 'https://gameon.app/api/v1/get_match';
    // let fetchData = { 
    //   method: 'POST', 
    //   body: {match_id: 7283},
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
    const url = 'https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019REG/5?key=10a1c8e6450b4be7a01a81026bbc78f0';
    let fetchData = { 
      method: 'GET', 
      // body: {match_id: 7283},
      headers: new Headers()
    }

    this.setState({isLoading: true});
    fetch(url, fetchData)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data[13])
        currentComponent.setState({
          match: data[13],
          isLoading: false})
      })
  }

  startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var countDownDate = new Date("Jan 5, 2021 14:25:00").getTime();
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

    display.textContent = hours + ":" + minutes + ":" + seconds + " to start";

    if (distance < 0) {
      clearInterval(x);
      document.querySelector('#time').innerHTML = "EXPIRED";
    }
    }, 1000);
  }

  properSuffix(int) {
    switch(int) {
      case("1"):
        return "1st"
        break;
       case("2"):
        return "2nd"
        break;
       case("3"):
        return "3rd"
        break;
      case("4"):
        return "4th"
        break;
      case("HALF"):
        return "Halftime"
        break;
    }
  }

  render() {
    let gameStatus = this.state.match.status == "Pending" ? 
                      <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col> :
                      <Col className='time-period-block' xs={2}><span id="time">{this.properSuffix(this.state.Quarter)}<br/>Quarter</span></Col>
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
           {/* <img src={nashville_logo} className="team-logo" alt="gameon-logo" /> */}
           <img src={colts} className="team-logo" style={logoStyle} alt="gameon-logo" />
           </Row>
           <Row className='score-block'> <span>{this.state.match.AwayScore || 0}</span></Row>
         </Col>
         
         {/* {gameStatus} */}
         <Col className='time-period-block' xs={2}><span id="time">{this.properSuffix(this.state.match.Quarter)}<br/>Quarter</span></Col>
         {/* <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col> */}

         <Col xs={5}>
           <Row className='team-block'>
             {/* <img src={kings_logo} className="team-logo-vertical" alt="gameon-logo" /> */}
             <img src={kc} className="team-logo" alt="gameon-logo" />
           </Row>
           <Row className='score-block'><span>{this.state.match.HomeScore || 0}</span></Row>
         </Col>
        </Row>
        <Row style={lasPlay}>
          <h3>Last Play:</h3>
         <p>{this.state.match.LastPlay}</p> 
        </Row>


      </div>
    )
  }
};

export default Score;