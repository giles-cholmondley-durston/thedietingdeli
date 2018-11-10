const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "/")), router);
app.set("view engine", "ejs");
app.set("views", "views");

router.get("/", function(req, res) {
  res.renderFile("./index.html", {});
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
