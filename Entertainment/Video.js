import React from 'react';
import VideoFile from './Video/Atha.mp4'

const App = () => {
  return (
    <div>
      <center>
        <video width="320" height ="250" controls>
          <source src={VideoFile} type="video/mp4"/>
        </video>
      </center>
    </div>
  )
}

export default App

