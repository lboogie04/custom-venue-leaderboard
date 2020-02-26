import React from 'react';
import gameon_avatar from '../images/gameon_avatar.png';
import ios_icon from '../images/app-store/Badge_AppStore@2x.png';
import android_icon from '../images/app-store/Badge_GooglePlay@2x.png';

const AppInfo = function(props) {
  return (
    <div className="app-info">
      <div className="wanna-play-section">
        <h1 className="wanna-play">Wanna Play?</h1>
        <img src={gameon_avatar} />
      </div>
      <div className="instructions">
        <ul>
          <li>1. Download GameOn</li>
          <li>2. Tap on "Play at the Bar"</li>
          <li>3. Enter Code: <span className="bar-code">{props.bar_code}</span></li>
        </ul>
      </div>
      <div className="app-icons">
        <img src={ios_icon} />
        <img src={android_icon} />
      </div>
    </div>
  );
};

export default AppInfo;