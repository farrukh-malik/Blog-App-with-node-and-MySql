const express = require('express');
const router = express.Router();

module.exports = ()=>{
    const userService = require('../services/user');

    router.post('/user', async (req, res, next)=>{
        try {
            const userObject = req.body.user;
            const responseOfUser = await userService.createUser(userObject);
            res.status(201).json({
                message: 'ok',
                responseOfUser
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    });    

        router.post('/user/authenticationCheck', async(req, res)=>{
           try{
               const authObj = req.body.auth;
               await userService.userAuthenticationCheck(authObj);
                res.status(200).json({
                    res: "success"
                })
            }catch(error){
                res.status(401).json({
                    err: error
                });
            }
        });

        router.get('/user/:userId/post', async (req, res, next)=>{
            try{
                const userId = req.params.userId;
                const userPosts = await userService.getUserPostAndComment(userId); 
                 res.status(200).json({
                     res: "success",
                     posts: userPosts
                 })
             }catch(error){
                 res.status(401).json({
                     err: error
                 });
             }
        });

        
    // router.post('/user/:userId/authenticate', (req, res)=>{
    //     req.params.userId;
    // });


    // router.post('/user/:userId/authenticate', (req, res)=>{
    //     req.params.userId;
    // });

    return router;
}