let http = require("http");
let path = require("path");

let express = require("express");

let app = express();

//for body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//req
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "user get successfully",
    user: [
      {
        name: "garvit",
        age: 22,
      },
    ],
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  //   res.status(200).json({ message: "home page" });
});

app.post("/users", (req, res) => {
  console.log(req.body, "req");

  let body = req.body;
  res.status(201).json({
    message: "user created success",
    user: body,
  });
});

//server
http.createServer(app).listen(3001, () => {
  console.log(" server started");
});

// app.listen(3001, () => {
//   console.log("server started");
// });
