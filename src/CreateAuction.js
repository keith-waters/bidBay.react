import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'

import firebase from 'firebase'
import config from './firebase/config'

firebase.initializeApp(config)
const database = firebase.database()

export default class CreateAuction extends Component {

  onStartAuction = () => {
    const item = {
      name: 'Cool item',
      startingBid: 100,
      auctioneer: 'Auctioneer1',
      currentBid: 100,
      currentBidder: '', 
    }

    database.ref('auctions/' + item.name).set({
      item: item.name,
      startingBid: item.startingBid,
      auctioneer: item.auctioneer,
      currentBid: item.currentBid,
      currentBidder: item.currentBidder, 
    });

    console.log(item)
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
          style={{marginBottom: 20}}
        />

        <TextField
          label='Enter a starting bid'
          placeholder='1000000'
          type='number'
          style={{marginBottom: 20}}
        />

        <Button 
          //component={Link} 
          //to='/watch-auction' 
          variant="contained" 
          color="primary"
          onClick={this.onStartAuction}
        >
          Start the Auction 
        </Button>
      </Layout>
    );
  }
}

