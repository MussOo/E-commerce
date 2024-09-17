


meAccount = (user_id_right, user_id_param) => {
    return user_id_right === user_id_param;
}


exports.users = async (req, res) => {
    User.find({}, {}, function (err, docs) {
        res.send(docs);
    });
}

exports.user = async (req, res) => {
    User.findById(req.params.id, function (err, docs) {
        res.send(docs);
    });
}

exports.update = async (req, res) => {
    if (meAccount(req.auth.userId, req.params.id)) {
        User
            .updateOne({ _id: req.params.id }, { ...data })
            .then(() => res.status(200).json({ message: "User updated !" }))
            .catch((error) => res.status(400).json({ error }));
    } else {
        res.status(403).json({ message: "You can't update this user" });
    }
}

exports.delete = async (req, res) => {
    if (meAccount(req.auth.userId, req.params.id)) {
        User
            .deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "User deleted !" }))
            .catch((error) => res.status(400).json({ error }));
    } else {
        res.status(403).json({ message: "You can't delete this user" });
    }
}
