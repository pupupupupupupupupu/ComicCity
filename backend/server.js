require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserSchema");

app.use(express.json());

app.get("/", (req, resp) => {
  resp.status(200).json({ mssg: "Welcome to the first route." });
});

app.post("/apis/user", async (req, resp) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    if(!user) {
        resp.status(400).json({mssg: "Something went wrong!"})
    }
    else {
        resp.status(200).json(user)
    }
  } catch (e) {
    resp.status(500).json({error: e.message})
  }
});

app.get("/apis/user", async (req, resp) => {
    try {
      const user = await User.find();
      if(!user) {
          resp.status(400).json({mssg: "Something went wrong!"})
      }
      else {
          resp.status(200).json(user)
      }
    } catch (e) {
      resp.status(500).json({error: e.message})
    }
  });

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    family: 4,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to database and listening on port:${process.env.PORT}`
      );
    });
  });
