const express = require('express')
const { getBlogs } = require('../controller/blog.controller')
const router = express.Router();

router.get('/blogs', getBlogs);

module.exports = router;