const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Sarlavha yozilishi shart"],
        trim: true
    },
    content: {
        type: String,
        required: [true, "Malumot kiritilishi shart"],
    },
    author: { 
        type: String,
        required: [true, "Malumot kiritilishi shart"]
    },
    image: {
        type: String,
      },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", postSchema);

