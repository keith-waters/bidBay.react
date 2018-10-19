import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


const Layout = (props) => {
  return (
    <Grid container justify='center' spacing={24}>
      <Grid item style={{margin: 10}}>
        <Paper style={{padding: 20, textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
        {props.children}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Layout
