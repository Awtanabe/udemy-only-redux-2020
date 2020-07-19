import React from 'react';
// ネームドexport
import { selectSong } from '../actions'
import SongList from './SongList'

// データはstoreに格納するから関数コンポーネントでいいよね
function App() {
  return (
    <div className="App">
      <SongList/>
    </div>
  );
}

export default App;
