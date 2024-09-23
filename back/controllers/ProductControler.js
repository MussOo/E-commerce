const { ObjectId } = require("mongodb");
const Product = require("../models/Product");
const { ObjectID } = require("bson");

module.exports.products = async (req, res) => {
  Product.find({}, {}, function (err, docs) {
    res.send(docs);
  });
}

module.exports.product = async (req, res) => {

  let searchparam = [];

  if (req.query.category) {
    searchparam.push({ category: ObjectID(req.query.category) });
  }
  if (req.query.name) {
    searchparam.push({ name: { $regex: req.query.name, $options: "i" } });
  }
  if (req.query.price) {
    searchparam.push({ price: req.query.price });
  }
  if (req.query.limit) {
    searchparam.push({ limit: req.query.limit });
  }
  if (req.query.page) {
    searchparam.push({ page: req.query.page });
  }
  if (req.query.sort) {
    searchparam.push({ sort: req.query.sort });
  }

  Product.find({ $and: searchparam }, {}, function (err, docs) {
    res.send(docs);
  } );
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




module.exports.stock = async (req, res) => {
  let data = req.body;
  let product = await Product.findOne({ _id: req.params.id })
  .exec();

  if (!product){
    return res.status(200).json({ error: "Product not found !", error_code: 601, real_qty: 0 });
  }

  if (product.stock < data.stock) {
    return res.status(200).json({ error: "Stock not available !", error_code: 602, real_qty: product.stock });
  }

  return res.status(200).json({ message: "Stock available !", real_qty: product.stock   });
}