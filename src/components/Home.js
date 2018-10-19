import React from 'react'
import Typography from '@material-ui/core/Typography'

import Layout from './common/Layout'
import LinkButton from './common/LinkButton'

const Home = () => {
  return (
    <Layout>
      <Typography align='center' variant='h4' style={{marginBottom: 10}}>
        Welcome to bidBay
      </Typography>

      <Typography align='center' variant='h6' style={{marginBottom: 10}}>
        What do you want to do?
      </Typography>

      <LinkButton to='/create-auction'>
        Create an Auction 
      </LinkButton>

      <Typography align='center' style={{fontSize: 16}}>
        or
      </Typography>

      <LinkButton to='/bid-auction'>
        Bid on an auction
      </LinkButton>
    </Layout>
  )
}

export default Home
