const Blog = require('../models/blogs')


const blog_index = (req, res) => {
    Blog.find().then(response => {
        res.render('index', { title: 'Home', blogs: response })
    })
}

const blog_id = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(response => {
            console.log(`the blog query response is  ${response}`)
            res.render('detail', { title: 'blog details', blog: response })
        })
        .catch(err => console.log(err))
}

const blog_create = (req, res) => {
    console.log(req.body)
    const blog = new Blog(req.body)
    blog.save()
        .then(response => res.redirect('/'))
        .catch(err => console.log(err))
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.deleteOne({ _id: id })
        .then(result => {
            console.log(result)
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
}

const blog_create_get =(req, res) => {
    res.render('create', { title: "Create New Blog" });
}
module.exports = {
    blog_index, blog_id, blog_create, blog_delete, blog_create_get
}