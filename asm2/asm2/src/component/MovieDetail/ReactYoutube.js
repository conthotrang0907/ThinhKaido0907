import React from 'react';
import YouTube from 'react-youtube';

function Example(props) {
  const onPlayerReady = (event) => {
    
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    },
  };

  return <YouTube videoId={props.id} opts={opts} onReady={onPlayerReady} />;
}
export default Example;