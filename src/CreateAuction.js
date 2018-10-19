import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'
import { createAuctionItem } from './actions'

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
      id: uuidv1(),
      name: this.state.item,
      startingBid: this.state.startingBid,
      auctioneer: 'Auctioneer1',
      currentBid: this.state.startingBid,
      currentBidder: '', 
      active: true,
    }
    
    this.props.dispatch(createAuctionItem(item))
  }

  handleChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
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

        <Button 
          component={Link} 
          to='/watch-auction' 
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

export default connect()(CreateAuction);
