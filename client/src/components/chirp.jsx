import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Chirp(props) {
  let link;

  if (props.location == `chirps/${props.id}`) {
    link = <Link className="btn btn-danger btn-outline-danger" style={{ margin: '10px' }}>Details</Link>
  } else {
    link = <Link className="btn btn-success btn-outline-light" style={{ margin: '10px' }} to={`chirps/${props.id}`}>Details</Link>
  }

  return (
    <Fragment>
      <div className="card text-white bg-success mb-3" style={{ margin: '20px', fontWeight: 'bold' }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p className="card-text">{props.text}</p>
          { link }
        </div>
        <Fragment>
        </Fragment>
      </div>
    </Fragment>
  )
}

export default Chirp;