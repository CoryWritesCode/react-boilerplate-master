import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';


class Navigation extends Component {
    constructor(params) {
        super(params)

    }

    render() {
        return (
        <Fragment>
            <Router>
                <Fragment>
                        <Link className="btn btn-dark" style={{ margin: '10px', display: 'inline-block' }} to="/">Home</Link>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                    </Switch>
                </Fragment>
            </Router>
        </Fragment>
        )
    }
}

export default Navigation;