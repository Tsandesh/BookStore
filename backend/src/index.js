import express from "express";
import "dotenv/config";
import connection from "./models/index.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.use("/book", bookRoute);

app.listen(process.env.PORT || 8000, async () => {
  console.log("Server has started 🚀");

  try {
    await connection.authenticate();
    connection.sync();
    console.log("Successfully connected to DB");
  } catch (err) {
    console.error("Error during connection to database ", err);
  }
});
