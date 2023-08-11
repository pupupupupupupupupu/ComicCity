const express = require("express");
const Comic = require("../models/comicModel");
const {
  getComics,
  getComic,
  createComic,
  deleteComic,
  updateComic,
  search,
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

//Search route
// router.get("/search/:name", search);
router.get("/search/:query", search);

module.exports = router;
