import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Chirp(props) {
  // let display = [];
  // let allChrips = Object.entries(props.chirps);
  // for (const [id, data] of allChrips) {

  //   display.push(
  //     <Fragment>
  //       <div className="card text-white bg-success mb-3" style={{ margin: '20px', fontWeight: 'bold', display: 'flex' }} key={ id }>
  //         <div className="card-body">
  //           {data.text}
  //         </div>
  //         {/* <Link className="btn btn-info" style={{ margin: '10px', display: 'inline-block' }} to={`/${id}`}></Link> */}
  //       </div>
  //     </Fragment>
  //   )
  // }
  // display.pop()


  return (
    <Fragment>
      <div className="card text-white bg-success mb-3" style={{ margin: '20px', fontWeight: 'bold' }}>
        <div className="card-body text-white">
          {props.text}
        </div>
      </div>
    </Fragment>
  )
}

export default Chirp;