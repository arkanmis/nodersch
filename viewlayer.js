const path = require("path");
const express = require("express");
const data = require('./data/items.json')
console.log(data)

const app = express();

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "hbs");
app.use(express.static("public"));

const middleWareSatu = (req, res, next) => {
  console.log("middleware pertama");
  next();
};

const middleWareDua = (req, res, next) => {
  console.log("middleware kedua");
  next();
};

app.use(middleWareSatu);
app.use(middleWareDua);

app.get("/", (request, response) => {
  // response.send('index');
  response.render("index", {
    greetings: "halooo anjir"
  });
});

app.get("/echo/:name", (req, res) => {
  //res.send('this is from echo routes calling:' + req.params.name)
  res.render("index", {
    greetings: req.params.name
  });
});

app.get("/hactive8", (req, res) => {
  res.redirect("https://hacktiv8.com/");
});

app.get("/download", (req, res) => {
  res.sendFile("E:DownloadsMusicRingtoneLocked_Away.mp3");
});

app.listen(5443, () => {
  console.log("executed on 127.0.0.1");
});
