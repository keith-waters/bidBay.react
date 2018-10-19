import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'


export default class CreateAuction extends Component {
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

        <Button component={Link} to='/watch-auction' variant="contained" color="primary">
          Start the Auction 
        </Button>
      </Layout>
    );
  }
}

