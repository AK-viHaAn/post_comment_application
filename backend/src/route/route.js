const express = require('express')
const router = express.Router()

const commentController = require('../controller/commentController')
const postController = require('../controller/postController')



router.post("/createpost", postController.createPost)
router.get("/getpost", postController.getPost)
router.put("/updatepost", postController.updatePost)
router.put("/deletepost", postController.deletePost)

router.post("/createcomment", commentController.createComment)
router.get("/getcomment", commentController.getComment)
router.put("/updatecomment", commentController.updateComment)
router.put("/deletecomment", commentController.deleteComment)

module.exports = router