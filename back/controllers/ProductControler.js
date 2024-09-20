const { ObjectId } = require("mongodb");
const Product = require("../models/Product");
const { ObjectID } = require("bson");

module.exports.products = async (req, res) => {
  Product.find({}, {}, function (err, docs) {
    res.send(docs);
  });
}

module.exports.product = async (req, res) => {
  Product.findById(req.params.id, function (err, docs) {
    res.send(docs);
  });
}

module.exports.create = async (req, res) => {
  let data = req.body;
  const product = new Product({
    ...data,
    category : ObjectID(data.category)
  });
  product
    .save()
    .then(() => res.status(201).json({ message: "Product created !" }))
    .catch((error) => res.status(400).json({ error }));
}

module.exports.update = async (req, res) => {
  let data = req.body;
  Product
    .updateOne({ _id: req.params.id }, { ...data })
    .then(() => res.status(200).json({ message: "Product updated !" }))
    .catch((error) => res.status(400).json({ error }));
}

module.exports.delete = async (req, res) => {
  Product
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Product deleted !" }))
    .catch((error) => res.status(400).json({ error }));
}

