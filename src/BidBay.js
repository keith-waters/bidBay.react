import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Home from './Home'
import CreateAuction from './CreateAuction'


export default class BidBay extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/create-auction' component={CreateAuction}/>
        </div>
      </BrowserRouter>
    );
  }
}

