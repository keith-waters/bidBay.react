import client from './client'

export default (item) => {
  const itemRef = client.ref('auctions/' + item.name)

  let data
  itemRef.on('value', async snapshot => {
    console.log(snapshot.val())
    data = snapshot.val()
  })

console.log('data', data)
  return data
}
