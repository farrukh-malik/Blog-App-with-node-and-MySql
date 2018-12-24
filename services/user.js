const connection = require('../models/schema-execution');
const tables = require('../models/table-names');

function createUser(user){
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${tables.USER} (first_name, last_name, email, password) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}')`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

function userAuthenticationCheck(authobj){
    return new Promise ((resolve, reject)=>{
        const query = `SELECT * FROM ${tables.USER} WHERE email='${authobj.email}' AND password='${authobj.password}'`;
    
        connection.query(query, (err, result)=>{
        if(err){
            reject(err);
        }
        if(!result.length){
            reject('length 0');
        }
        resolve(result);
        });
    });
    
}

function getUserPostAndComment(userId){
    return new Promise((resolve, reject)=>{
        const query = `SELECT u.id as userId, CONCAT(u.first_name, ' ', u.last_name) as full_name, p.id, p.post, c.id as comment_id, c.comment 
                        FROM ${tables.USER} u INNER JOIN ${tables.POST} p ON u.id = p.user_id
                        LEFT JOIN ${tables.COMMENT} c ON  p.id = c.post_id 
                        where u.id = ${userId}`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    createUser,
    userAuthenticationCheck,
    getUserPostAndComment
}