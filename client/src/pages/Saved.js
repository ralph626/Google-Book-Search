import axios from "axios";
import { useState, useEffect } from "react";

export default function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    axios.get("/api/books").then(({ data }) => {
      console.log("got some data back");
      setSavedBooks(data);
    });
  }, []);
  return (
    <>
      <h1>My Saved Books</h1>
      <div className="container">
        {savedBooks.map((book, i) => (
          <div className="card p-2 mt-3" key={i}>
            <div className="card-header" style={{ fontSize: "30px" }}>
              {book.title}
            </div>
            <div className="card-body" style={{ display: "inline-flex" }}>
              <a href={book.url} target="__blank">
                <img
                  height="165"
                  width="125"
                  style={{ display: "inline" }}
                  src={
                    book.image ||
                    "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"
                  }
                  alt="book img"
                />
              </a>
              <div style={{ marginLeft: "20px", width: "100%" }}>
                <h5 className="card-title">{(book.authors || []).join(" ")}</h5>
                <p
                  className="card-text"
                  style={{
                    maxHeight: "100px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.description}
                </p>
                <svg
                  style={{
                    float: "right",
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
