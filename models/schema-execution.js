const connection = require('./connection');
const schema = require('./schema');

connection.connect(err => {
    if(err){
        throw err;
    }

    connection.query(schema.CREATE_USERS_TABLE, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('User Table Created');
    });

    connection.query(schema.CREATE_POST_TABLE, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('post Table Created');
    });

    connection.query(schema.CREATE_COMMENT_TABLE, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('comment Table Created');
    });
});

module.exports = connection