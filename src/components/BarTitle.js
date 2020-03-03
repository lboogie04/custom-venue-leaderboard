import React from 'react';

const BarTitle = function(props) {
  return (
    <div>
      <img src={props.logo} />
      {window.location.href.includes('xfinity') ? <p></p> : <p className='bar-name'>@ {props.bar_name}</p>}
    </div>
  );
};

export default BarTitle;