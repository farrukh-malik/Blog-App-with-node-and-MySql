const express = require('express');
const router = express.Router();

module.exports = ()=>{
    const postService = require('../services/post');

    
    router.post('/user/:userId/post', async (req, res, next)=>{
        try {
            const userId = req.params.userId;
            const postObject = req.body.post;
            await postService.createPost(postObject, userId);
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