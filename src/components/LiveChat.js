import React , {useEffect}from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector((store)=> store.chat.messages);

  useEffect(() => {
   const i = setInterval(()=>{
    //API Polling
    console.log("API Polling");
      dispatch(
        addmessage({
          name:generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000); //poll message every 2sec
    return () => clearInterval(i);
  },[]);


  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      
      {//Dont use index for key but here we used for learning but in real app use id i.e message id
      chatMessages.map((c,i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
}

export default LiveChat