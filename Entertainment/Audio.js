import React from 'react';
import AudioFile from './Audio/IIt.ogg'

const App = () => {
  return (
    <div>
      <center>
        <audio controls>
          <source src={AudioFile}type="audio/ogg"/>
        </audio>
      </center>
    </div>
  )
}

export default App

