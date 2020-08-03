var Post = require('../../app/Models/Post');
module.exports = {
    getAll: (req, res, next) => {
        Post.getAll(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    },
    getById: (req, res, next) => {
        Post.getById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    },
    add: (req, res, next) => {
        Post.add(req.body, function(err, count) {
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
            }
        });
    },
    remove: (req, res, next) => {
        Post.delete(req.params.id, function(err, count) {
            if (err) {
                res.json(err);
            } else {
                res.json(count);
            }
        });
    },
    update: (req, res, next) => {
        Post.update(req.params.id, req.body, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
}