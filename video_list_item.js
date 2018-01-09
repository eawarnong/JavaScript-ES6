import React from 'react'

const VideoListItem = (props) => {
  return <li>Video</li>
}

export default VideoListItem;

///// Video List Items /////
import React from 'react'

// the video argument is just like 
// const video = props.video
const VideoListItem = ({ video }) => {
  const imageUrl = video.snippet.thumbnails.default.image;
  
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
