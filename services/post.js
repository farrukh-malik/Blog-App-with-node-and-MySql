const connection = require('../models/schema-execution');
const tables = require('../models/table-names');

function createPost(post , userId){
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${tables.POST} (user_id, post) VALUES (${userId}, '${post.post}')`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}


module.exports = {
    createPost
}