var mysql = require('mysql');
var util = require('util');

var pool  = mysql.createPool({
  "mysql":{
      "connectionLimit" : 50,
      "port"            : 3306,
      "host"            : "localhost",
      "user"            : "root",
      "password"        : "123123",
      "database"        : "mydb"
  }.mysql
});
const pool_query = util.promisify(pool.query).bind(pool);


module.exports = {
    load: (sql) => pool_query(sql),
    add: (entity, tableName) =>
      pool_query(`insert into ${tableName} set ?`, entity),
    del: (condition, tableName) =>
      pool_query(`delete from ${tableName} where ?`, condition),
    patch: (entity, condition, tableName) =>
      pool_query(`update ${tableName} set ? where ?`, [entity, condition]),
  };
  