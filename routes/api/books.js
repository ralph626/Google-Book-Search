const router = require("express").Router();
const Book = require("../../models/book");
// const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
// .delete(booksController.remove);

router.post("/", (req, res) => {
  console.log(req.body);
  Book.create(req.body).then((data) => res.json(data));
});

router.get("/", (req, res) => {
  Book.find().then((data) => res.json(data));
});

module.exports = router;
