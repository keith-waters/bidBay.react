import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ReactDOM from 'react-dom';
import BidBay from './BidBay';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BidBay />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
