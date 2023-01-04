import React from "react";
import { useState, useEffect } from "react";
import api from "../api/axios.js";

import "react-toastify/dist/ReactToastify.css";

const Navbar = (props) => {
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    async function searchBooks() {
      const response = await api.get(`/book/search?q=${searchText}`);
      if (response.data) {
        props.setbookList(response.data);
      }
    }
    if (searchText) searchBooks();
    else props.setbookList(props.tempBook);
  }, [searchText]);

  return (
    <div className="flex justify-evenly text-center bg-nav text-black py-2 ">
      <p className="text-cyan-400 text-4xl italic bold">Book pasal</p>
      <a className="active mx-3" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div className="dropdown">
        <button className="peer px-5 py-2">Category</button>
        <div
          className="hidden peer-hover:flex hover:flex
          w-[200px]
          flex-col justify-start text-start drop-shadow-lg"
        >
          <a href="/">General</a>
          <a href="/">Arts & Design</a>
          <a href="/">Litreature & Novel</a>
          <a href="/">Buissness & Finanace</a>
          <a href="/">Travel</a>
        </div>
      </div>
      <div className=" hover:bg-sky-700 mx-3 text-black">
        <input
          className="bg-gray-200 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
