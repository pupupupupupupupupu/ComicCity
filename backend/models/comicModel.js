const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema(
  {
    coverImage: {
      // type: String,
      // default:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMeeQAqpDFqC6VMZyabfwmQS-i-iMdYUXso6K7BY4CNw&usqp=CAU&ec=48665701",
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    comicName: {
      type: String,
      required: [true, "A nome for comic is required"],
    },
    authorName: {
      type: String,
      default: "Anonymous",
    },
    genre: {
      type: Array,
    },
    comicImages: {
      type: Array,
      // public_id: {
      //   type: Array,
      //   required: true
      // },
      // url: {
      //   type: Array,
      //   required: true
      // }
    },
    chapterNumber: {
      type: Number,
      required: true,
    },
    totalChapter: {
      type: Number,
      required: false,
      validate: {
        validator: function (value) {
          return value >= this.chapterNumber;
        },
        message:
          "Total chapter should be greater than or equal to chapter number",
      },
    },
    description: {
      type: String,
      required: [true, "A description is needed"],
    },
    email: {
      type: String,
      unique: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comic", comicSchema);
