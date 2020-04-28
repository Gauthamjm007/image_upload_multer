const mongoose = require("mongoose");

const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/imageupload")
    .then(() => {
      console.log("connected to the database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = setupDB;
