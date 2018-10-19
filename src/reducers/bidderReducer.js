import { CREATE_NEW_BIDDER } from "../actions/types"

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEW_BIDDER:
      return action.payload
    default:
      return state
  }
}
