import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
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

