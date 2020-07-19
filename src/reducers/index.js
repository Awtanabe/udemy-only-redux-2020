import {combineReducers} from 'redux'
// 複数のreducerを結合する

// 初期データ? reducerらしい combineしてるから
const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All star', duration: '3:15'}
  ]
}

// Reducer
const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})