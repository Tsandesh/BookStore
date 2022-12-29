import { Router } from "express";
import bookController from "../controllers/bookController.js";
import multer from "multer";

const router = Router();
const BookController = new bookController();

let imgName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    imgName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim();
    cb(null, imgName);
  },
});

const upload = multer({ storage: storage });

//CRUD OPERATIONS

router.get("/", BookController.getBooks); //getBook/limit=2(num) ni rakhna milxa

router.post("/addBook", upload.single("image"), (req, res) => {
  BookController.addBook(req,res,imgName);
});

router.delete("/deleteBook/:id", BookController.deleteBook);

router.put("/update/:id", BookController.updateBook);

//search?q=
router.get("/search", BookController.searchBook);

export default router;
