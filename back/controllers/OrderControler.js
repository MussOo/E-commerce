const Order = require("../models/Order");

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
    });
    order.save()
        .then(() => res.status(201).json({ message: "Order created !" }))
        .catch((error) => res.status(400).json({ error }));
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
    Order
        .deleteOne({ _id: req.params.id, user: user_id })
        .then(() => res.status(200).json({ message: "Order deleted !" }))
        .catch((error) => res.status(400).json({ error }));
}

