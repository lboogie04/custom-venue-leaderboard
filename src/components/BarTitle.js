import React from 'react';

const BarTitle = function(props) {
  return (
    <div>
      <img src={props.logo} />
      <p className='bar-name'>@ {props.bar_name}</p>
    </div>
  );
};

export default BarTitle;