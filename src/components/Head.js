import React , {useState,useEffect}from 'react'
import  { useDispatch } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API } from '../utils/constants';

const Head = () => {
const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const dispatch = useDispatch();
useEffect(()=> {
 //make an api call after every keypress
 // but if the diffenrce beyween two api calls is less than 200 ms 
 // decline the api call
 const timer = setTimeout(() => getSearchSuggestions(), 200);// In this code we are saying do a cal lafter 200 ms 

 return() => {
  clearTimeout(timer)
 };
},[searchQuery])

/**
 * 
 */
const getSearchSuggestions = async() => {
  console.log("API CALL- " + searchQuery);
  const data = await fetch(SEARCH_API+searchQuery);
  const json = await data.json();
  console.log(json);
  setSuggestions(json[1]);
}

const toggleMenuHandler =() => {
  dispatch(toggleMenu());
};

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
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
        <div className="flex items-center">
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-700 p-3 rounded-r-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A8.5 8.5 0 101 10.5a8.5 8.5 0 0015.65 6.15z"
              />
            </svg>
          </button>
        </div>
        <>
          {searchQuery && suggestions && (
            <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((sug) => (
                  <li
                    key={sug}
                    className="py-2 px-2 shadow-sm hover:bg-gray-100"
                  >
                     {sug}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="/assets/usericon.png" />
      </div>
    </div>
  );
}

export default Head