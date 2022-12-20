const KEY_API = 'AIzaSyCzff_07MSByTAa6mP0aMUBL6DWDTXp8y4'
const CHANNEL_ID = 'UCo1sbS6LFUqPzAnw8WmTgjw'

export const playlistChannel: string = `https://www.googleapis.com/youtube/v3/search?key=${KEY_API}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5
`
