import React from 'react';
import Score from '../components/Score';

class ScoreContainer extends React.Component {

  render () {
    const { platform } = this.props;
    console.log(window.location.href);

    if (platform === 'x1') return (<div className='x1-container'></div>)
    return (
      <div className='score-container'>
        <Score />
      </div>
    )
  }
}

export default ScoreContainer;