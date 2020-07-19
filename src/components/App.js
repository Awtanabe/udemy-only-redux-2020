import React from 'react';
// ネームドexport
import { selectSong } from '../actions'
import SongList from './SongList'
import SongDetail from './SongDetail'

// データはstoreに格納するから関数コンポーネントでいいよね
function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList/>
        </div>
        <div className="column eight wide">
          <SongDetail/>
        </div>
      </div>
    </div>
  );
}

export default App;
