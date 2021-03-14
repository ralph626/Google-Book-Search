import "./Main.css";
import axios from "axios";
import { useState } from "react";
import BookCard from "../components/Card";

export default function Main() {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const searchBook = () => {
    if (input) {
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + input)
        .then(({ data }) => {
          setBooks(data.items);
          console.log(data.items[0]);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchBook();
  };

  return (
    <>
      <div className="bg-warning p-5">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control form-control-lg"
            onChange={({ target: { value } }) => setInput(value)}
            placeholder="type in a book name to search"
            aria-label=".form-control-lg example"
          />
        </form>
        <button onClick={searchBook} className="btn btn-lg btn-success">
          Search
        </button>
      </div>
      <div className="container">
        {books.map((book) => (
          <BookCard key={book.id} {...book.volumeInfo} />
        ))}
      </div>
    </>
  );
}
