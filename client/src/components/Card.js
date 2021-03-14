import axios from "axios";
const placeholdDesc = "This book has no descriptions because it's shit.";
export default function BookCard(props) {
  const handleSaveFav = (book) => {
    const bookData = {
      title: book.title,
      authors: book.authors || [],
      description: book.description,
      image:
        book.imageLinks?.thumbnail ||
        "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg",
      url: book.infoLink,
    };
    axios.post("/api/books", bookData).then((res) => alert("Book was saved!"));
  };
  return (
    <>
      <div className="card p-2 mt-3">
        <div className="card-header" style={{ fontSize: "30px" }}>
          {props.title}
        </div>
        <div className="card-body" style={{ display: "inline-flex" }}>
          <a href={props.infoLink} target="__blank">
            <img
              height="165"
              width="125"
              style={{ display: "inline" }}
              src={
                (
                  props.imageLinks || {
                    thumbnail:
                      "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg",
                  }
                ).thumbnail
              }
              alt="book img"
            />
          </a>
          <div style={{ marginLeft: "20px", width: "100%" }}>
            <h5 className="card-title">{(props.authors || []).join(" ")}</h5>
            <p
              className="card-text"
              style={{
                maxHeight: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.description || placeholdDesc}
            </p>
            <svg
              onClick={() => handleSaveFav(props)}
              style={{ float: "right", marginRight: "20px", cursor: "pointer" }}
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
    </>
  );
}
