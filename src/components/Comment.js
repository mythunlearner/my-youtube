import React from 'react'

const Comment = ({data}) => {
    const {name, reply, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className="w-8 h-8" alt="user" src="/assets/usericon.png"></img>
      <div className='px-3'>
        <p className='font-bold'> {name}</p>
        <p>{reply}</p>
      </div>
    </div>
  );
}

export default Comment