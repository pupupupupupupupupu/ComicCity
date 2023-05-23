// const fs = require('fs');
// const express = require('express');

// const router = express.Router();
// const toursx = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// const getAllTours = (req, res) => {
//   console.log(req.requestedTime);

//   res.status(200).json({
//     status: 'success',
//     result: toursx.length,
//     requestedAt: req.requestedTime,
//     data: { toursy: toursx },
//   });
// };

// const getTour = (req, res) => {
//   console.log(req.params);
//   const id = req.params.id * 1;

//   if (id > toursx.length) {
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid ID',
//     });
//   }

//   const tour = toursx.find((el) => el.id === id);

//   res.status(200).json({
//     status: 'success',
//     result: toursx.length,
//     data: { tour },
//   });
// };
// router.post("/")

// const createTour = (req, res) => {
//   //   console.log(req.body);

//   const newId = toursx[toursx.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);

//   toursx.push(newTour);
//   fs.writeFile(
//     './starter/dev-data/data/tours-simple.json',
//     JSON.stringify(toursx),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > toursx.length) {
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid ID',
//     });
//   }
//   res.status(200).json({
//     status: 'Success',
//     data: {
//       tour: '<Updated tour here...>',
//     },
//   });
// };

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > toursx.length) {
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid ID',
//     });
//   }
//   res.status(200).json({
//     status: 'Success',
//     data: null,
//   });
// };

// router.route("/").get(getAllTours).post(createTour);
// router
//   .route("/:id")
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

// module.exports = router;

const express = require("express");
const Comic = require("../models/comicModel");
const {
  getComics,
  getComic,
  createComic,
  deleteComic,
  updateComic
} = require("../controllers/comicController");

const router = express.Router();

//GET all comics
router.get("/", getComics);

//GET a single comic
router.get("/:id", getComic);

//POST a new comic
router.post("/", createComic);

//DELETE a single comic
router.delete("/:id", deleteComic);

//UPDATE a single comic
router.patch("/:id", updateComic);

module.exports = router;
