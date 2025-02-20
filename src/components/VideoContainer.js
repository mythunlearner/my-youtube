import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
const VideoContainer = () => {
 
 const [videos, setVideos] = useState([]);
  useEffect(() => {
      getVideos();
  },[]);

  const getVideos = async (req ,res) => {
    try{
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data?.json();
      console.log("API" + json);
      setVideos(json?.items);
    }catch(error) {
      console.log(error.message);
      res.status(400).json({ error: error.message });
    }
   
  };

  return (
    <div>
      {videos && videos?.length > 0 ?<VideoCard info={videos[0]}/> : <p>Loading...</p>}
    </div>
  )
}

export default VideoContainer