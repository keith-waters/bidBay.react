import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import Layout from './common/Layout'
import LinkButton from './common/LinkButton'

import { createAuctionItem } from '../actions'

class CreateAuction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      startingBid: 0,
    }
  }

  onStartAuction = () => {
    const item = {
      name: this.state.item,
      startingBid: this.state.startingBid,
      auctioneer: 'Auctioneer1',
      currentBid: this.state.startingBid,
      currentBidder: '', 
    }
    
    this.props.dispatch(createAuctionItem(item))
  }

  handleChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <Layout>
        <Typography align='center' variant='h4' style={{marginBottom: 10}}>
          Create an Auction
        </Typography>

        <TextField
          autoFocus
          label='Enter an Item'
          placeholder='Reinvented Wheel v731.12.001'
          value={this.state.item}
          onChange={ev => this.handleChange('item', ev)}
          style={{marginBottom: 20}}
        />

        <TextField
          label='Enter a starting bid'
          placeholder='1000000'
          value={this.state.startingBid === 0 ? '' : this.state.startingBid}
          onChange={ev => this.handleChange('startingBid', ev)}
          type='number'
          style={{marginBottom: 20}}
        />

        <LinkButton 
          to='/watch-auction' 
          onClick={this.onStartAuction}
        >
          Start the Auction 
        </LinkButton>
      </Layout>
    )
  }
}

export default connect()(CreateAuction)
