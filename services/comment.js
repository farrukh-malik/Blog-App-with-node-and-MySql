const connection = require('../models/schema-execution');
const tables = require('../models/table-names');

function createComment(userId , postId, comment){
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${tables.COMMENT} (user_id, post_id, comment) VALUES (${userId}, ${postId}, '${comment}')`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

function updateComment(commentId, comment){
    return new Promise((resolve, reject)=>{
        const query = `UPDATE ${tables.COMMENT} SET comment = ('${comment}') WHERE id = ${commentId}`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

function deleteComment(commentId){
    return new Promise((resolve, reject)=>{
        const query = `DELETE FROM ${tables.COMMENT} WHERE id = ${commentId}`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    createComment,
    updateComment,
    deleteComment
}