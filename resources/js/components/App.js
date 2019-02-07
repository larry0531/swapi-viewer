import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from "react-router-dom"

import List from './List'
import Item from './Item'


class App extends Component {
    render() {
        return (
          <Router>
            <div className="container">
              <Route exact path="/" component={List} />
              <Route path="/item/:peopleId" component={Item} />
            </div>
          </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
