import express from "express";
import bodyParser from "body-parser";
import router from "./router/contact.js";

const app = express();
const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
