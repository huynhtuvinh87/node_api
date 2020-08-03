var express = require('express');
var router = express.Router();
var Post = require('../app/Models/Post');
const {
    getAll,
    getById,
    add,
    remove,
    update
} = require('../app/Controllers/PostController');
router.get('/posts', getAll);
router.get('/posts/:id?', getById);
router.post('/posts/', add);
router.delete('/posts/:id', remove);
router.put('/posts/:id', update);
module.exports = router;