import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
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
      res.status(400).json({ error: error.message });
    }
   
  };

  return (
    <div className='flex flex-wrap justify-start w-auto'>
      {videos.map((video) => (
       <Link to={"/watch?v="+video.id}>
            <VideoCard key={video.id} info={video} />
       </Link> 
      ))}
    </div>
  );
}

export default VideoContainer