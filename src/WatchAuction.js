import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from './actions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'


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

        <TextField
          disabled
          label='Item'
          value={this.state.item}
          style={{marginBottom: 20}}
          InputProps={{style: {color: 'black'}}}
        />

        <TextField
          disabled
          label='Current Bidder'
          value={this.state.currentBidder}
          style={{marginBottom: 20}}
          InputProps={{style: {color: 'black'}}}
        />

        <TextField
          disabled
          label='Current bid'
          type='number'
          value={this.state.currentBid}
          style={{marginBottom: 20}}
          InputProps={{style: {color: 'black'}}}
        />

        <Button component={Link} to='/' variant="contained" color="primary" >
          Close the Auction 
        </Button>

      </Layout>
    );
  }
}

export default connect(state => {
  return {
    auction: state.auction
  }
}, actions)(WatchAuction);
