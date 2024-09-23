const { ObjectId } = require("mongodb");
const Order = require("../models/Order");
const Product = require("../models/Product");

module.exports.orders = async (req, res) => {
    let user_id = req.auth.userId;
    Order.find({ user: user_id }, {}, function (err, docs) {
        res.send(docs);
    });
}

module.exports.order = async (req, res) => {
    let user_id = req.auth.userId;
    try{
        Order.find({_id : req.params.id, user : user_id }, function (err, docs) {
            res.send(docs);
        });
    }catch(error){
        res.status(400).json({ error });
    }
}

module.exports.create = async (req, res) => {
    const order = new Order({
        ...req.body
    })
    order.save()
        .then(() => {
            res.status(201).json({ message: "Order created !" })
        })
        .catch((error) => res.status(400).json({ error }));

        order.orderItems.forEach(async (item) => {
            await Product.updateOne(
                { _id: new ObjectId(item.product) },
                { $inc: { stock: -item.quantity } }
            );
        });
}

module.exports.update = async (req, res) => {
    let user_id = req.auth.userId;
    Order
        .updateOne({ _id: req.params.id, user: user_id }, { ...req.body })
        .then(() => res.status(200).json({ message: "Order updated !" }))
        .catch((error) => res.status(400).json({ error }));
}

module.exports.delete = async (req, res) => {
    let user_id = req.auth.userId;
    let order = await Order.findOne({ _id: req.params.id, user: user_id }).exec();

    
    if(!order){
        return res.status(404).json({ message: "Order not found !" });
    }
    if (!order.isDelivered) {
        order.orderItems.forEach(async (item) => {
            await Product.updateOne(
                { _id: new ObjectId(item.product) },
                { $inc: { stock: item.quantity } }
            );
        });
    }
    Order
        .deleteOne({ _id: req.params.id, user: user_id })
        .then(() => res.status(200).json({ message: "Order deleted !" }))
        .catch((error) => res.status(400).json({ error }));
}

