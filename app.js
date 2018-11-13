const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user')();
const errorHandling = require('./utils/error-handling');
const postRouter = require('./routes/post')();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', userRouter);

app.use('/api', postRouter)

// app.use(errorHandling);

app.listen(3000, ()=>{
    console.log('app listining on port 3000');
});