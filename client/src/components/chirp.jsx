import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Chirp(props) {

  return (
    <Fragment>
      <div className="card text-white bg-success mb-3" style={{ margin: '20px', fontWeight: 'bold' }}>
        <div className="card-body">
          {props.text}
        </div>
      </div>
    </Fragment>
  )
}

export default Chirp;