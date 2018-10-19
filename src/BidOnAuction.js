import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'

export default class WatchAuction extends Component {
  
  render() {
    return (
      <Layout>
        <Typography align='center' variant='h4' style={{marginBottom: 10}}>
          Bidding on Auction
        </Typography>

        <TextField
          disabled
          label='Item'
          value={'Coolest Item'}
          style={{marginBottom: 20}}
          InputProps={{style: {color: 'black'}}}
        />

        <TextField
          disabled
          label='Current Bidder'
          value={'BidderOne'}
          style={{marginBottom: 20}}
          InputProps={{style: {color: 'black'}}}
        />

        <TextField
          label='Current bid'
          disabled
          type='number'
          value={'100'}
          style={{marginBottom: 20}}
          InputProps={{style: {color: 'black'}}}
        />

        <Button component={Link} to='/' variant="contained" color="primary" >
          Bid $200
        </Button>

      </Layout>
    );
  }
}

