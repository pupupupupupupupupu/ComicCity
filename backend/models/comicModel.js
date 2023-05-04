const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    coverImage: {
        type: String
    },
    comicName: {
        type: String,
        required: [true, "A nome for comic is required"]
    },
    authorName: {
        type: String,
        default: "Anonymous"
    },
    genre: {
        type: Array
    },
    comicImages: {
        type: Array
    },
    chapterNumber: {
        type: Number,
        required: true
    },
    totalChapter: {
        type: Number,
        required: true,
        validate: {
            validator:  function(value) {
                return value >= this.chapterNumber;
            },
            message: "Total chapter should be greater than or equal to chapter number"
        },

    },
}, {timestamps: true});

module.exports = mongoose.model("Comic", comicSchema);
