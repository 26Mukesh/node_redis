const { connectRedis } = require('../config/redis.config');
const { Blog } = require('../models/blog.model')

let redisConnectionClient;
(async() => {
        redisConnectionClient = await connectRedis();
})()

exports.getBlogs = async (req, res) => {
    try {
        const allBlogs = await redisConnectionClient.get("blogs");
        if(allBlogs) {
            console.log('Data from redis')
            const data = JSON.parse(allBlogs)
            res.status(200).json(data)
        } else {
            const blogs = await Blog.find();
            await redisConnectionClient.set('blogs', JSON.stringify(blogs))
            console.log('Data set in redis')
            res.status(200).json(blogs)
        }        
    } catch (error) {
        res.status(500).json({ message: error})
    }
}