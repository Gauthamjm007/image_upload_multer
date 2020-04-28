const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  image_url: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
