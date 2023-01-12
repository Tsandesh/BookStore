import { React, useEffect, useState } from "react";
import api from "../api/axios.js";
import Navbar from "../components/Navbar.js";

const Home = () => {
  const [bookList, setbookList] = useState([]);
  const [tempBook, settempBook] = useState([]);

  useEffect(() => {
    async function getbook() {
      const response = await api.get("/book");
      setbookList(response.data);
      settempBook(response.data);
    }
    getbook();
  }, []);

  return (
    <div>
      <Navbar tempBook={tempBook} setbookList={setbookList} />
      <hr />
      <div className="border-2 bg-main rounded shadow-lg grid grid-cols-4 gap-1">
        {bookList.length > 0
          ? bookList.map((book, index) => {
              return (
                <div className="w-9/10 m-5 p-2 drop-shadow-lg bg-nav rounded-3xl border bg-white ">
                  <img
                    src={book.image}
                    className="w-full h-72 rounded-2xl p-3"
                    alt="..."
                  />
                  <div className="p-4 bg-white rounded-xl">
                    <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                      {book.title}
                    </h5>
                    <p>{book.description.substring(0, 80)}</p>
                    <div className="flex flex-col">
                      <a
                        href="/"
                        className="bg-slate-400 hover:bg-green-400 text-white text-lg px-4 inline-block mt-4 rounded"
                      >
                        Buy Now :${book.price}
                      </a>

                      <span class="mt-1 inline-block bg-slate-400 rounded  px-4 my-2text-sm font-semibold text-white">
                        {book.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : "NO BOOKS TO SHOW"}
      </div>
    </div>
  );
};

export default Home;
