import React from 'react';
import { Row, Col } from 'react-bootstrap';
import gameon_avatar from '../images/gameon_avatar.png';


export function LeaderboardContestant(props) {
  let avatar = props.avatar === "" ? gameon_avatar : props.avatar
  return (
    <Row className='contestant' >
      <Col className='position'>{props.position}</Col>
      <Col xs={6} className='user-info'>
      <img src={avatar} className="avatar" alt="user-avatar" />
        {props.name}
      </Col>
      <Col className='points'>{props.points}</Col>
    </Row>
    )
}

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        contestants: []
    };

    this.fetchContestants = this.fetchContestants.bind(this);
  }

  componentDidMount() {
    this.fetchContestants();
    this.timer = setInterval(() => this.fetchContestants(), 30000);
  }

  fetchContestants() {
    console.log('Fetching contestants');
    const url = 'https://gameon.app/api/v1/get_bar_leaderboard';
    let fetchData = { 
      method: 'POST', 
      body: {},
      headers: new Headers()
  }
  let currentComponent = this;
  this.setState({isLoading: true});
  fetch(url, fetchData)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data)
      currentComponent.setState({
        contestants: data,
        isLoading: false})
    })

  }

  render() {
    const { contestants } = this.state;
    return (
      <div className='leaderboard-section'>
        <div className='leaderboard'>
        <p>Leaderboard</p>
        {contestants.length > 0 && contestants.map((contestant, i) => {
          return (<LeaderboardContestant
            key={i}
            name={contestant.user.username}
            avatar={contestant.user.profile_picture}
            position={contestant.final_position}
            points={contestant.final_points}
          />)
        })
       }
        </div>
      </div>
    )
  }
}

export default Leaderboard;