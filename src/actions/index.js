// Action Creater
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED', // type
    payload: song // value
  }
}

// export default selectSong; 