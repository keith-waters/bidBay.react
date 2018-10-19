import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Layout from './common/Layout'
import DisabledTextField from './common/DisabledTextField'

import * as actions from '../actions'

class BidOnAuction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      currentBidder: '',
      currentBid: 0,
      nextBid: 0,
      hasBid: false,
    }
  }

  componentDidMount() {
    this.refreshState()
    this.props.createBidder()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.auction.currentBid !== this.props.auction.currentBid) {
      let hasBid = true 
      if(
        prevProps.auction.item !== this.props.auction.item ||
        prevProps.auction.currentBidder !== this.props.bidder
      ) {
        hasBid = false 
      }
      
      this.refreshState(hasBid)
    }
  }

  refreshState = (hasBid = false) => {
    this.setState({
      item: this.props.auction.item,
      currentBidder: this.props.auction.currentBidder,
      currentBid: this.props.auction.currentBid,
      nextBid: parseInt(this.props.auction.currentBid, 10) + 100,
      hasBid: hasBid,
    })
  }

  onBid = () => {
    const bid = {
      nextBidder: this.props.bidder,
      nextBid: this.state.nextBid,
    }
    this.setState({hasBid: true})
    this.props.bidOnCurrentAuction(bid)
  }

  render() {
    const isOutbid = this.state.hasBid && this.props.auction.currentBidder !== this.props.bidder
    const disabled = this.props.auction.currentBidder === this.props.bidder
    return (
      <Layout>
        <Typography align='center' variant='h4' style={{marginBottom: 10}}>
          Bidding on Auction
        </Typography>

        <Typography align='center' variant='h6' style={{marginBottom: 10}}>
          {'You are ' + this.props.bidder}
        </Typography>

        <DisabledTextField
          label={'Item'}
          value={this.state.item}
        />

        <DisabledTextField
          label='Current Bidder'
          value={this.state.currentBidder}
        />

        <DisabledTextField
          label='Current Bid'
          type='number'
          value={this.state.currentBid}
        />

        <Button 
          variant="contained" 
          color="primary" 
          onClick={this.onBid}
          disabled={disabled}
         >
          Bid ${this.state.nextBid || 0}
        </Button>

        { 
          isOutbid ?  
          (
            <Typography align='center' variant='h6' style={{marginBottom: 10}}>
              You've been outbid. Bid again!
            </Typography>
          ) :
          null
        }
  

      </Layout>
    )
  }
}

export default connect(state => {
  return {
    auction: state.auction,
    bidder: state.bidder,
  }
}, actions)(BidOnAuction)
