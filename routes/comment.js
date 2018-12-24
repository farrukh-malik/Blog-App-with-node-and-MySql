const express = require('express');
const router = express.Router();

module.exports = ()=>{
    const commentService = require('../services/comment');

    
    router.post('/user/:userId/post/:postId/comment', async (req, res, next)=>{
        try {
            const userId = req.params.userId;
            const postId = req.params.postId;
            const comment = req.body.comment;
            await commentService.createComment(userId, postId, comment);
            res.status(201).json({
                message: 'ok'
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    });  


    router.put('/comment/:commentId', async (req, res, next)=>{
        try {
            const commentId = req.params.commentId;
            const comment = req.body.comment;
            await commentService.updateComment(commentId, comment);
            res.status(201).json({
                message: 'ok'
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }); 


    router.delete('/comment/:commentId', async (req, res, next)=>{
        try {
            const commentId = req.params.commentId;
            await commentService.deleteComment(commentId);
            res.status(201).json({
                message: 'ok'
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }); 

    return router;
}