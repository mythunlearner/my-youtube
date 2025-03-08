import React , {useEffect, useState}from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");
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
    }, 1500); //poll message every 2sec
    return () => clearInterval(i);
  },[]);


  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div>
      {//Dont use index for key but here we used for learning but in real app use id i.e message id
      chatMessages.map((c,i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
      </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
       e.preventDefault();
       dispatch(addmessage({
        name: 'Mithun',
        message: liveMessage
       })
      );
      setliveMessage("");// after sending the message clear the text in input
    }}>
      <input className="px-2 w-96" type="text" value={liveMessage} onChange={(e)=> {
        setliveMessage(e.target.value)
      }}/>
       <button className='px-2 mx-2 bg-green-100'>Submit</button>
    </form>

    </>
  );
}

export default LiveChat