import { Router } from "express";
import bookController from "../controllers/bookController.js";

const router = Router();
const BookController = new bookController();

//CRUD OPERATIONS

router.get("/",BookController.getBooks); //getBook/limit=2(num) ni rakhna milxa

router.post("/addBook", BookController.addBook);

router.delete("/deleteBook/:id", BookController.deleteBook);

router.put("/update/:id", BookController.updateBook);

//search?q=
router.get("/search",BookController.searchBook)


export default router;
