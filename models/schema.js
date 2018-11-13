const TABLES = require('./table-names');

const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.USER}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                first_name VARCHAR(40) NOT NULL,
                                last_name VARCHAR(40) NOT NULL,
                                email VARCHAR(100) NOT NULL UNIQUE,
                                password TEXT NOT NULL,
                                PRIMARY KEY (id)
                           )`;
const CREATE_POST_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.POST}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                user_id MEDIUMINT DEFAULT NULL,
                                post TEXT NOT NULL,
                                FOREIGN KEY(user_id) REFERENCES ${TABLES.USER}(id),
                                PRIMARY KEY (id)
                           )`;

const schemas = {
    CREATE_USERS_TABLE,
    CREATE_POST_TABLE
};

module.exports = schemas;