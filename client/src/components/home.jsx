import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import Chirp from './chirp';
import Form from './form'

class Home extends Component {
  constructor(params) {
    super(params)

    this.state = {
      chirps: {},
      value: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleClick() {

    fetch('http://localhost:3000/api/chirps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      data: JSON.stringify(this.state.value)
    })

    this.setState({
      value: ''
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  componentWillMount() {

    fetch('http://localhost:3000/api/chirps')
      .then((res) => {
        return res.json();
      })
      .then(
        (json) => {
          console.log(json);

          this.setState({
            chirps: json,
          })
        },
        (err) => {
          console.log(err);
        }
      )
  }

  render() {

    var { value, chirps } = this.state;
    var eachChirp = Object.keys(chirps);
    eachChirp.pop();
    console.log(eachChirp);

    // if (chirps.length == 0)
    return (
      <Fragment>
        <Form value={value} onClick={this.handleClick} onChange={this.handleChange} />
        {eachChirp.map((val) => {
          <Chirp text={chirps[val].text} key={val.toString()} />
        })}
      </Fragment>
    )
  }
}

export default Home;