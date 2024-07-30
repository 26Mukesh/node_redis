const { Blog } = require("../models/blog.model")
const axios = require('axios')

exports.fillDummyData = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        res.data.map(async (r) => {
            await Blog.create({
                title: r.title,
                body: r.body
            })
        })
    })
    console.log('blogs created')
}