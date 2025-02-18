import React from 'react'
import  { useDispatch } from "react-redux";
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
const dispatch = useDispatch();
const toggleMenuHandler =() => {
  dispatch(toggleMenu());
};

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="/assets/bredcrumimag.jpg"
        />
        <img
          className="h-8 mx-2"
          alt="menu"
          src="/assets/YouTube_Logo_2017.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          {" "}
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="/assets/usericon.png" />
      </div>
    </div>
  );
}

export default Head