import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Layout from './Layout'


export default class CreateAuction extends Component {
  render() {
    return (
      <Layout>
        <p>
          Im an auction!
        </p>
      </Layout>
    );
  }
}

