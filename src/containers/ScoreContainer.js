import React from 'react';
import Score from '../components/Score';

class ScoreContainer extends React.Component {

  render () {
    const { platform } = this.props;
    console.log(window.location.href);

    if (platform === 'xfinity') return (<div className='x1-container'><iframe width="1210" height="750" src="https://www.youtube.com/embed/g66AFo8kRvg?start=12" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>)
    return (
      <div className='score-container'>
        <Score />
      </div>
    )
  }
}

export default ScoreContainer;