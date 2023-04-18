const express = require('express')
const blogController = require('../controller/blogController')
const router = express.Router()


router.get('', blogController.blog_index)

router.get('/add-blog', blogController.blog_create_get)

router.get('/:id', blogController.blog_id)

router.delete('/delete/:id', blogController.blog_delete)

router.post('/', blogController.blog_create)




module.exports = router;