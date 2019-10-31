const Post = require('../models/Post');

const index = async (req, res) => {
  const posts = await Post.find().sort({createdAt: -1})
  res.send(posts)
}

const create = async (req, res) => {
  const { title, content } = req.body
  const newPost = new Post({
    title,
    content
  })
  const savedPost = await newPost.save()
  res.send(savedPost)
}

module.exports = {
  index,
  create
}