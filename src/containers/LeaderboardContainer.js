import React from 'react';
import BarTitle from '../components/BarTitle';
import Leaderboard from '../components/Leaderboard';
import gameon_logo from '../images/Logo_GameOn.png';

class LeaderboardContainer extends React.Component {

  render () {
    return (
      <div className='leaderboard-container'>
        <BarTitle
          logo={gameon_logo}
          bar_name='Toms Watch Bar'
          />
          <Leaderboard />
      </div>
    )
  }
}

export default LeaderboardContainer;