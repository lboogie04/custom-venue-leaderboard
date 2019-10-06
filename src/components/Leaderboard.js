import React from 'react';
import { Row, Col } from 'react-bootstrap';


export function LeaderboardContestant(props) {
  return (
    <Row className='contestant'>
      <Col>{props.position}</Col>
      <Col xs={6}>{props.name}</Col>
      <Col>{props.points}</Col>
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
    this.timer = setInterval(() => this.fetchContestants(), 5000);
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

  fetch(url, fetchData)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data)
      currentComponent.setState({contestants: data})
    })

  }

  render() {
    return (
      <div className='leaderboard-section'>
        <div className='leaderboard'>
        <p>Leaderboard</p>
        <LeaderboardContestant
          name='Lawrence'
          position='1'
          points='1730'
          />
          <LeaderboardContestant
          name='Jessica'
          position='2'
          points='1730'
          />
          <LeaderboardContestant
          name='Robert'
          position='3'
          points='1730'
          />
        </div>
      </div>
    )
  }
}

export default Leaderboard;