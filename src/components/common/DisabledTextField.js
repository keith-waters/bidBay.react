import React from 'react'
import TextField from '@material-ui/core/TextField'

const DisabledTextField = (props) => {
  return (
    <TextField
      disabled
      label={props.label}
      value={props.value}
      style={{marginBottom: 20}}
      InputProps={{style: {color: 'black'}}}
      {...props}
    />
  )
}

export default DisabledTextField
