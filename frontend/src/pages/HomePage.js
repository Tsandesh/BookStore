import { React, useEffect, useState } from "react";
import api from "../api/axios.js";

const Home = () => {
  const [bookList, setbookList] = useState([]);

  useEffect(() => {
    async function getbook() {
      const response = await api.get("/book");
      setbookList(response.data);
      console.log(response.data);
    }
    getbook();
  }, []);
  return (
    <div>
      This is a Home Page
      {bookList.length > 0
        ? bookList.map((book, index) => {
            return <div>{book.name}</div>;
          })
        : "NO BOOKS TO SHOW"}
    </div>
  );
};

export default Home;
