import { CREATE_AUCTION } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_AUCTION:
      return action.payload;
    default:
      return state;
  }
};
