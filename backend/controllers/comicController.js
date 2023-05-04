const Comic = require("../models/comicModel.js")
const mongoose = require("mongoose")

// get all comic
const getComics = async (req, res) => {
    const comics = await Comic.find({}).sort({createdAt: -1})

    res.status(200).json(comics)
}

// get a single comic
const getComic = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such comic"})
    }

    const comic = await Comic.findById(id)

    if(!comic) {
        return res.status(404).json({error: "No such comic found"})
    }

    res.status(200).json(comic)
}

// create a new comic
const createComic = async (req, res) => {
    const { coverImage, comicName, authorName, genre, comicImages, chapterNumber, totalChapter } = req.body
  
    // add doc to database
    try{
      const comic = await Comic.create({ coverImage, comicName, authorName, genre, comicImages, chapterNumber, totalChapter });
      res.status(200).json(comic)
    } catch(error) {
      res.status(400).json({error: error.message})
    }
  
    res.json({message: "POST a comic"})
}

// delete a comic
const deleteComic = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such comic"})
    }

    const comic = await Comic.findOneAndDelete({_id: id})

    if(!comic) {
        return res.status(400).json({error: "No such comic found"})
    }

    res.status(200).json(comic)
}


// update a comic
const updateComic = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such comic"})
    }

    const comic = await Comic.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!comic) {
        return res.status(400).json({error: "No such comic found"})
    }

    res.status(200).json(comic)
}


module.exports = {
    getComics,
    getComic,
    createComic,
    deleteComic,
    updateComic
}