import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Details extends Component {

  constructor(params) {
    super(param)

    this.state = {
      chirp: {}
    }
  }

  componentWillMount() {

    fetch(`http://localhost:3000/api/chirps/${this.props.match.params.id}`)
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
    return (
      <h1>hello</h1>
    )
  }
}

export default Details;