import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"
import reducers from "./reducers"
import BidBay from './components/BidBay'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers, 
  {}, 
  composeEnhancers(applyMiddleware(reduxThunk))
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <BidBay />
        </React.Fragment>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
