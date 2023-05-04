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


// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connection successful");
//   });

// const mangaSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "A name is required"],
//     unique: true,
//   },
//   rating: {
//     type: Number,
//     default: 3,
//   },
//   chapter: {
//     type: Number
//     // required: [true, "Number of chapter(s) is/are required"],
//   }
// });

// const Manga = mongoose.model("Manga", mangaSchema);

// const testManga = new Manga({
//   name: "Ayush Shrivastava",
//   price: 3,
// });

// testManga
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR 💥:", err);
//   });

// const port = process.env.PORT || 3000;


const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const comicRoutes = require("./router/comicRouter")

//express app
const app = express();
dotenv.config({path: "./config.env"})


//middleware
app.use(express.json());


app.use((req, rs, next) => {
  console.log(req.path, req.method);
  next();
});


//routes
app.use("/api/comics", comicRoutes);


//connect to database
mongoose.connect(process.env.DATABASE)
  .then(() => {

    //listening to port
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT)
    })

  })
  .catch((error) => {
    console.log(error)
  });