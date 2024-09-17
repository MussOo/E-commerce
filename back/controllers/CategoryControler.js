

module.exports.categories = async (req, res) => {
    Category.find({}, {}, function (err, docs) {
        res.send(docs);
    });
}

module.exports.category = async (req, res) => {
    Category.findById(req.params.id, function (err, docs) {
        res.send(docs);
    });
}

module.exports.create = async (req, res) => {
    const category = new Category({
        ...req.body
    });
    category.save()
        .then(() => res.status(201).json({ message: "Category created !" }))
        .catch((error) => res.status(400).json({ error }));
}

module.exports.update = async (req, res) => {
    Category
        .updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: "Category updated !" }))
        .catch((error) => res.status(400).json({ error }));
}

module.exports.delete = async (req, res) => {
    Category
        .deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Category deleted !" }))
        .catch((error) => res.status(400).json({ error }));
}

