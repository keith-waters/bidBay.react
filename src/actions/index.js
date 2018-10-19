import createAuction from "../firebase/createAuction"
import createBidderName from "../firebase/createBidderName"
import { currentAuctionRef } from "../firebase/currentAuctionRef"
import { FETCH_CURRENT_AUCTION, CREATE_NEW_BIDDER } from "./types"

export const createAuctionItem = (item) => async dispatch => {
  createAuction(item)
}

export const createBidder = () => async dispatch => {
    const newBidder = await createBidderName()
    dispatch({
      type: CREATE_NEW_BIDDER,
      payload: newBidder
    })
}

export const fetchCurrentAuction = () => async dispatch => {
  currentAuctionRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CURRENT_AUCTION,
      payload: snapshot.val()
    })
  })
} 

export const bidOnCurrentAuction = (bid) => async dispatch => {
  currentAuctionRef.update(
    {
      currentBid: bid.nextBid,
      currentBidder: bid.nextBidder,
    }
  )
} 
