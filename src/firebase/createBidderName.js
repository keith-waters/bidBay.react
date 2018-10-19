import client from './client'

export default async () => {
  const bidders = await client.ref('bidders').once('value')
  let count
  let newBidder = 'Bidder0'

  if(!bidders.val()) {
    await client.ref('bidders').set({0: 'Bidder0'})
  } else {
    count = Object.values(bidders.val()).length + 1
    newBidder = 'Bidder' + count
    await client.ref('bidders').update({[count]: 'Bidder' + count})
  }
  
  return newBidder
}
