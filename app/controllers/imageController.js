const Image = require("../models/image");
let imgPort = "http://localhost:4000";


module.exports.list = (req, res) => {
  Image.find()
    .then((img) => {
      res.json(img);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const image = new Image({
    image_url: imgPort + "/uploads/" + req.file.filename,
  });

  image
    .save()
    .then((img) => {
      res.json(img);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Image.findByIdAndDelete(id)
    .then((img) => {
      res.json(img);
    })
    .catch((err) => {
      res.json(err);
    });
};
