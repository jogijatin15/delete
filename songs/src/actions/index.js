// Action creator
export const selectSong = (song) => {
  // Return an action
  const selectedSong = {
    type: "SONG_SELECTED",
    payload: song
  }
  return selectedSong;

}