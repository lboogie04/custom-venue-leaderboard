import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gameon_White from '../images/Gameon_White.png';
import Toms_Watch_Bar from '../images/Toms_Watch_Bar.png';
import nashville_logo from '../images/team-logos/nashville_logo.png';
import kings_logo from '../images/team-logos/kings_logo.png';
import cowboys from '../images/team-logos/cowboys.png';
import packers from '../images/team-logos/packers.png';


const logoStyle = {
  marginTop: '10%'
};

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        match: {}
    };

    this.fetchMatch = this.fetchMatch.bind(this);
  }

  componentDidMount() {
    this.fetchMatch();
    this.timer = setInterval(() => this.fetchMatch(), 5000);
    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
    this.startTimer(fiveMinutes, display);
  }

  fetchMatch() {

    const url = 'https://gameon.app/api/v1/get_match';
    let fetchData = { 
      method: 'POST', 
      body: {match_id: 7283},
      headers: new Headers()
    }

    let currentComponent = this;
    this.setState({isLoading: true});
    fetch(url, fetchData)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data)
        currentComponent.setState({
          match: data,
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

  render() {
    let gameStatus = this.state.match.status == "Pending" ? 
                      <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col> :
                      <Col className='time-period-block' xs={2}><span id="time">{this.state.match.current_increment}<br/>{this.state.match.time_increment}</span></Col>
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
           <img src={packers} className="team-logo" style={logoStyle} alt="gameon-logo" />
           </Row>
           <Row className='score-block'> <span>{this.state.match.visitor_team_points || 0}</span></Row>
         </Col>
         
         {gameStatus}
         {/* <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col> */}

         <Col xs={5}>
           <Row className='team-block'>
             {/* <img src={kings_logo} className="team-logo-vertical" alt="gameon-logo" /> */}
             <img src={cowboys} className="team-logo" alt="gameon-logo" />
           </Row>
           <Row className='score-block'><span>{this.state.match.home_team_points || 0}</span></Row>
         </Col>
        </Row>


      </div>
    )
  }
};

export default Score;