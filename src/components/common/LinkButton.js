import React from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'

const LinkButton = (props) => {
  return (
    <Button 
      onClick={props.onClick} 
      component={Link} 
      to={props.to} 
      variant="contained" 
      color="primary"
    >
      {props.children} 
    </Button>
  )
}

export default LinkButton
