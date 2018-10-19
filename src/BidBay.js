import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Home from './Home'
import CreateAuction from './CreateAuction'
import WatchAuction from './WatchAuction'
import BidOnAuction from './BidOnAuction'

export default class BidBay extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/create-auction' component={CreateAuction}/>
          <Route path='/watch-auction' component={WatchAuction}/>
          <Route path='/bid-auction' component={BidOnAuction}/>
        </div>
      </BrowserRouter>
    );
  }
}

