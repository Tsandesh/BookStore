import React from "react";
import { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchBooks, searchBooks } from "../store/bookSlice.js";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    async function bookSearch() {
      dispatch(searchBooks(searchText));
      // const response = await api.get(`/book/search?q=${searchText}`);
      // if (response.data) {
      //   props.setbookList(response.data);
      // }
    }
    if (searchText) {
      bookSearch();
    } else {
      dispatch(fetchBooks());
    }
    // else props.setbookList(props.tempBook);
  }, [searchText]);

  return (
    <div className="flex justify-evenly  text-center bg-nav text-black pt-4 pb-2 w-full text-[20px]">
      <p className="text-cyan-400 text-4xl italic bold">Book pasal</p>
      <Link className="active mx-3 hover:text-cyan-400 " to="/">
        Home
      </Link>
      <Link to="#about" className="hover:text-cyan-400">
        About
      </Link>
      <Link to="#contact" className="hover:text-cyan-400">
        Contact
      </Link>

      <span className="group relative inline-block">
        <button className="inline-flex items-center rounded px-4  hover:text-cyan-400">
          Dropdown
        </button>
        <ul className="absolute hidden pt-1 text-gray-700 text-start group-hover:block group-hover:z-50 w-max ">
          <li className="my-3  w-full ">
            <a
              className=" border bg-white  rounded-t py-2 px-4 hover:bg-gray-400 my-2"
              href="#"
            >
              General
            </a>
          </li>
          <li className="my-3  w-full">
            <a
              className=" border bg-white   rounded-t py-2 px-4 hover:bg-gray-400"
              href="#"
            >
              Arts & Design
            </a>
          </li>
          <li className="my-3 w-full">
            <a
              className=" border bg-white   rounded-t py-2 px-4 hover:bg-gray-400"
              href="#"
            >
              Litreature & Novel
            </a>
          </li>
          <li className="my-3 w-full">
            <a
              className=" border bg-white   rounded-t py-2 px-4 hover:bg-gray-400"
              href="#"
            >
              Buissness & Finanace
            </a>
          </li>
          <li className="my-3 w-full">
            <a
              className=" border bg-white   rounded-t py-2 px-4 hover:bg-gray-400"
              href="#"
            >
              Travel
            </a>
          </li>
        </ul>
      </span>

      <div className=" mx-3 text-black">
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
