import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


export default class Home extends Component {
  render() {
    return (
      <Grid container justify='center' spacing={24}>
      
        <Grid item style={{margin: 10}}>
          <Paper style={{padding: 20, textAlign: 'center'}}>

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

            <Button component={Link} to='/' variant="contained" color="primary">
              Bid on an auction
            </Button>

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

