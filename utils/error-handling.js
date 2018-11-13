module.exports = (err, req, res)=>{
    console.log('jhjkhh        ',err);
    return res.status(err.status).json({
        message: 'error'
    });
}