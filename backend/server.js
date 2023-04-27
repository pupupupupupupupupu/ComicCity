// require("dotenv").config();
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const User = require("./models/UserSchema");

// app.use(express.json());

// app.get("/", (req, resp) => {
//   resp.status(200).json({ mssg: "Welcome to the first route." });
// });

// app.post("/apis/user", async (req, resp) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.create({ email, password });
//     if(!user) {
//         resp.status(400).json({mssg: "Something went wrong!"})
//     }
//     else {
//         resp.status(200).json(user)
//     }
//   } catch (e) {
//     resp.status(500).json({error: e.message})
//   }
// });

// app.get("/apis/user", async (req, resp) => {
//     try {
//       const user = await User.find();
//       if(!user) {
//           resp.status(400).json({mssg: "Something went wrong!"})
//       }
//       else {
//           resp.status(200).json(user)
//       }
//     } catch (e) {
//       resp.status(500).json({error: e.message})
//     }
//   });

// mongoose
//   .connect(process.env.DB, {
//     useNewUrlParser: true,
//     family: 4,
//   })
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(
//         `Connected to database and listening on port:${process.env.PORT}`
//       );
//     });
//   });

const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const comicData = JSON.parse(fs.readFileSync("./data/website-data.json"));

app.get("/api/v1/comicData", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { comicData: comicData },
  });
});

app.post("/api/v1/comicData", (req, res) => {
  // console.log(req.body);

  const newId = comicData[comicData.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  comicData.push(newTour);
  fs.writeFile("./data/website-data.json", JSON.stringify(comicData), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        name: newTour,
      },
    });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
