import createAuction from "../firebase/createAuction"
import { currentAuctionRef } from "../firebase/currentAuctionRef"
import { FETCH_CURRENT_AUCTION } from "./types"

export const createAuctionItem = (item) => async dispatch => {
  createAuction(item)
}

export const fetchCurrentAuction = () => async dispatch => {
  currentAuctionRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CURRENT_AUCTION,
      payload: snapshot.val()
    });
  });
}; 

export const bidOnCurrentAuction = (bid) => async dispatch => {
  currentAuctionRef.update(
    {
      ['/currentBid']: bid.nextBid,
      ['/currentBidder']: bid.nextBidder,
    }
  );
}; 
