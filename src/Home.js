import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'


export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Typography align='center' variant='h4' style={{marginBottom: 10}}>
          Welcome to bidBay
        </Typography>

        <Typography align='center' variant='h6' style={{marginBottom: 10}}>
          What do you want to do?
        </Typography>

        <Button component={Link} to='/create-auction' variant="contained" color="primary">
          Create an Auction 
        </Button>

        <Typography align='center' style={{fontSize: 16}}>
          or
        </Typography>

        <Button component={Link} to='/bid-auction' variant="contained" color="primary">
          Bid on an auction
        </Button>
      </Layout>
    );
  }
}

