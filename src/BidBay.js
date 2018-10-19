import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { connect } from 'react-redux'
import Home from './Home'
import CreateAuction from './CreateAuction'
import WatchAuction from './WatchAuction'
import BidOnAuction from './BidOnAuction'

import * as actions from './actions'

class BidBay extends Component {
  componentWillMount() {
    this.props.fetchCurrentAuction()
  }
  
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

export default connect(state => {
  return {
    auction: state.auction,
  }
}, actions)(BidBay);
