import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
const VideoContainer = () => {
 const [videos, setVideos] = useState([]);
  useEffect(() => {
      getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("API" + json);
    setVideos(json.items);
  };

  return (
    <div>
      {videos.length > 0 ?<VideoCard info={videos[0]}/> : <p>Loading...</p>}
    </div>
  )
}

export default VideoContainer