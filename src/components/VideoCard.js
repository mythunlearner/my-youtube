import React , {useState} from 'react'

const VideoCard = ({info ={}}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails,adLabel } = snippet;

    console.log(info);

    console.log(snippet);

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' src={thumbnails?.medium.url} alt=''/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount}views</li>
            {/* Show Ad label only for enhanced components */}
           {adLabel && <li className="text-black-500 font-semibold">{adLabel}</li>}
        </ul>
    </div>
  )
};

export const AddVideoCard =  (UpdatedVideoCard) => {
 return function EnhancedComponent(props) {
  const [hovered, setHovered] = useState(false);

   // Inject "Ad. <channelTitle>" inside the card
   const modifiedInfo = {
    ...props.info,
    snippet: {
      ...props.info?.snippet,
      adLabel: `Ad. ${props.info?.snippet?.channelTitle}`, // Add Ad text separately
    },
  };

  return (
    <div
      className="relative "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>}
     {/* Pass updated props to WrappedComponent */}
     <UpdatedVideoCard {...props}   info={modifiedInfo}
        />
    </div>
  );

 };
};

export default VideoCard;