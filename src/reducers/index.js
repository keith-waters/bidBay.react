import { combineReducers } from "redux"

import auction from "./auctionsReducer"
import bidder from "./bidderReducer"

export default combineReducers({
  auction,
  bidder,
})
