const express =require("express");
const router = express.Router();
const bookController = require("../controllers/books-controller");

router.get("/",bookController.getAllBooks);
router.post("/",bookController.addBooks);
router.get("/:id",bookController.getById);
router.put("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);


module.exports = router;