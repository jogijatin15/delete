import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Shape of you', duration: '4:22' },
    { title: 'Hey Hey', duration: '3:12' },
    { title: 'How you doing', duration: '1:11' },
    { title: 'Cherry Cherry', duration: '5:36' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  const { type, payload } = action;
  if (type === 'SELECTED_SONG') {
    return payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

