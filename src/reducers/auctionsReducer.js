import { FETCH_CURRENT_AUCTION } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENT_AUCTION:
      return action.payload
    default:
      return state;
  }
};
