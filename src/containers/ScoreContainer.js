import React from 'react';
import Score from '../components/Score';

class ScoreContainer extends React.Component {

  render () {
    return (
      <div className='score-container'>
        <Score />
      </div>
    )
  }
}

export default ScoreContainer;