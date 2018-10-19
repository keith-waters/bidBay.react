import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

import Layout from './common/Layout'
import DisabledTextField from './common/DisabledTextField'

import * as actions from '../actions'


class WatchAuction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      currentBidder: '',
      currentBid: 0,
      nextBid: 0 
    }
  }

  componentDidMount() {
    this.refreshState()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.auction.currentBid !== this.props.auction.currentBid) {
      this.refreshState()
    }
  }

  refreshState = () => {
    this.setState({
      item: this.props.auction.item,
      currentBidder: this.props.auction.currentBidder,
      currentBid: this.props.auction.currentBid,
      nextBid: parseInt(this.props.auction.currentBid, 10) + 100
    })
  }
  render() {
    return (
      <Layout>
        <Typography align='center' variant='h4' style={{marginBottom: 10}}>
          Watching Auction
        </Typography>

        <DisabledTextField
          label='Item'
          value={this.state.item}
        />

        <DisabledTextField
          label='Current Bidder'
          value={this.state.currentBidder}
        />

        <DisabledTextField
          label='Current bid'
          type='number'
          value={this.state.currentBid}
        />

      </Layout>
    )
  }
}

export default connect(state => {
  return {
    auction: state.auction
  }
}, actions)(WatchAuction)
