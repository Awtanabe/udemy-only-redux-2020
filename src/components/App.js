import React from 'react';
// ネームドexport
import { selectSong } from '../actions'
import SongList from './SongList'

// データはstoreに格納するから関数コンポーネントでいいよね
function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList/>
        </div>
      </div>
    </div>
  );
}

export default App;
