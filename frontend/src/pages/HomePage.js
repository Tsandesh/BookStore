import { React, useEffect, useState } from "react";
import api from "../api/axios.js";
import Navbar from "../components/Navbar.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
      <div className="border-2 bg-main rounded shadow-lg grid grid-cols-4 gap-1 text-[16px]">
        {bookList.length > 0
          ? bookList.map((book, index) => {
              return (
                <div
                  className="w-9/10 m-5 p-2 drop-shadow-lg bg-nav rounded-3xl border bg-white"
                  key={index}
                >
                  <img
                    src={book.image}
                    className="w-full h-72 rounded-2xl p-3"
                    alt="..."
                    onClick={() => {
                      navigate("/explore", {
                        state: {
                          book: book,
                        },
                      });
                    }}
                  />
                  <div className="p-2 bg-white rounded-xl">
                    <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                      {book.name}
                    </h5>
                    <p>{book.description.substring(0, 80)}...</p>
                    <div className="flex flex-col">
                      <span
                        onClick={() => {
                          navigate("/explore", {
                            state: {
                              book: book,
                            },
                          });
                        }}
                        href="/"
                        className="bg-cyan-400 hover:bg-cyan-700 hover:cursor-pointer text-white text-lg px-4 inline-block mt-4 rounded"
                      >
                        Buy Now :${book.price}
                      </span>

                      <span
                        className="mt-1 inline-block hover:bg-cyan-700 hover:cursor-pointer bg-cyan-400 rounded  px-4 my-2text-sm font-semibold text-white"
                        onClick={() => {
                          navigate("/explore", {
                            state: {
                              book: book,
                            },
                          });
                        }}
                      >
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
