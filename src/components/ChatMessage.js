import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm px-2'>
         <img className="h-8" alt="user" src="/assets/usericon.png"/>
         <span className='font-bold px-2'>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage