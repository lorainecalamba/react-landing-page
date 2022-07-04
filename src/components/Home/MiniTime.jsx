import React from 'react';
import Iframe from 'react-iframe';

const MiniTime = (props) => {
  return (
    <div className="mini-time">
      <h5>{props.title}</h5>
      <Iframe
          src={props.src}
          frameBorder="0"
          width="248"
          height="60"
          allowtransparency="true"
        ></Iframe>
    </div>
  )
}

export default MiniTime
