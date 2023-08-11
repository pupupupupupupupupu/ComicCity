const Comic = require("../models/comicModel.js");
const mongoose = require("mongoose");
const cloudinary = require("../cloudinary/cloudinary.js");

// get all comic
// const getComics = async (req, res) => {
//   const comics = await Comic.find({}).sort({ createdAt: -1 });
//   console.log(comics);
//   res.status(200).json(comics);
// };

const getComics = async (req, res) => {
  try {
    const comics = await Comic.find({}).sort({ createdAt: -1 });
    console.log(comics);    
    const comicsWithoutImages = comics.map(({ comicImages, ...rest }) => rest);
    res.status(200).json(comicsWithoutImages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// get a single comic
const getComic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comic" });
  }

  const comic = await Comic.findById(id);

  if (!comic) {
    return res.status(404).json({ error: "No such comic found" });
  }

  res.status(200).json(comic);
};

// create a new comic
const createComic = async (req, res) => {
  const {
    coverImage,
    comicName,
    authorName,
    genre,
    comicImages,
    chapterNumber,
    totalChapter,
    description,
    email,
  } = req.body;

  // add doc to database

  try {
    // console.log(coverImage);
    const cover = await cloudinary.uploader.upload(coverImage, {
      folder: "products",
    });
    // const comicImg = await cloudinary.uploader.upload(comicImage, {
    //   folder: "products",
    // });

    const comic = await Comic.create({
      coverImage: {
        public_id: cover.public_id,
        url: cover.secure_url,
      },
      comicName,
      authorName,
      genre,
      comicImages,
      // : {
      //   public_id: comicImg.public_id,
      //   url: comicImg.url,
      //  },
      chapterNumber,
      totalChapter,
      description,
      email,
    });

    res.status(200).json(comic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  //   res.json({ message: "POST a comic" });
};

// delete a comic
const deleteComic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comic" });
  }

  const comic = await Comic.findOneAndDelete({ _id: id });

  if (!comic) {
    return res.status(400).json({ error: "No such comic found" });
  }

  res.status(200).json(comic);
};

// update a comic
const updateComic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comic" });
  }

  const comic = await Comic.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!comic) {
    return res.status(400).json({ error: "No such comic found" });
  }

  res.status(200).json(comic);
};

//search comic

const search = async (req, res) => {
try {
  
  // let queryRegexp = new RegExp(req.params.name,'i')
  const query = req.params.query;
  const results = await Comic.find({
    $or: [
      { comicName: { $regex: query, $options: 'i'} },
    ],
    // comicName:queryRegexp
  });

  res.status(200).json({
    status:'Sucess',
    data:results
  })

} catch (error) {
  res.status(500).json({
    status:'Error',
    message:"Something went wrong"
  });
}
 
};

module.exports = {
  getComics,
  getComic,
  createComic,
  deleteComic,
  updateComic,
  search,
};
