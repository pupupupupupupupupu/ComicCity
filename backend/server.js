const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const comicRoutes = require("./router/comicRouter");

//express app
const app = express();
dotenv.config({ path: "./config.env" });

app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow your frontend during development
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   credentials: true, // If needed for auth
// }));

//middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use((req, rs, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/comics", comicRoutes);

//connect to database
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    //listening to port
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
