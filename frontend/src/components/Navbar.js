import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-900 text-center text-white py-2 ">
      <a className="active mx-3" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

      <div className="dropdown">
        <button className="peer px-5 py-2 text-white">Category</button>
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
      <div className=" hover:bg-sky-700">
        <input type="text" placeholder="Search.." />
        <button type="submit" className="mx-3">
          <i className="fa fa-search"> Submit</i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
