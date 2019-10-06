import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gameon_White from '../images/Gameon_White.png';
import Toms_Watch_Bar from '../images/Toms_Watch_Bar.png';
import nashville_logo from '../images/team-logos/nashville_logo.png';
import kings_logo from '../images/team-logos/kings_logo.png';

class Score extends React.Component {

  componentDidMount() {
    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
    this.startTimer(fiveMinutes, display);
  }

  startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var countDownDate = new Date("Jan 5, 2021 19:00:00").getTime();
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
           <img src={nashville_logo} className="team-logo" alt="gameon-logo" />
           </Row>
           <Row className='score-block'> <span>0</span></Row>
         </Col>

         <Col className='time-period-block' xs={2}><span id="time">00:00:00<br/>to start</span></Col>

         <Col xs={5}>
           <Row className='team-block'>
             <img src={kings_logo} className="team-logo-vertical" alt="gameon-logo" />
           </Row>
           <Row className='score-block'><span>0</span></Row>
         </Col>
        </Row>


      </div>
    )
  }
};

export default Score;