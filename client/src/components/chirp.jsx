import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Chirp(props) {

  return (
    <Fragment>
      <div className="card text-white bg-success mb-3" style={{ margin: '20px', fontWeight: 'bold' }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p className="card-text">{props.text}</p>
          <Link className="btn btn-success btn-outline-light" style={{ margin: '10px' }} to={`chirps/${props.id}`}>Details</Link>
        </div>
        <Fragment>
        </Fragment>
      </div>
    </Fragment>
  )
}

export default Chirp;