const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user')();
const postRouter = require('./routes/post')();
const commentRouter = require('./routes/comment')();
const errorHandling = require('./utils/error-handling');



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', userRouter);

app.use('/api', postRouter);

app.use('/api', commentRouter);

// app.use(errorHandling);

app.listen(3000, ()=>{
    console.log('app listining on port 3000');
});