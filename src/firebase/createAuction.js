import client from './client'

export default (item) => {
  client.ref('currentAuction').set({
    item: item.name,
    startingBid: item.startingBid,
    auctioneer: item.auctioneer,
    currentBid: item.currentBid,
    currentBidder: item.currentBidder, 
  })
}
