import mysql, { Connection } from "mysql2/promise";

// const connection: Connection = await mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "admin123",
//   database: "myecommerce_db",
// });
// Create a connection pool
const connection = mysql.createPool({
  host: /*"127.0.0.1"*/ /*"mysql://root:jZdhpfXPikGFLgmOwZIrVkbjWgZKJcSn@shuttle.proxy.rlwy.net:53697/railway"*/ /*process
    .env.MYSQLHOST*/ "shuttle.proxy.rlwy.net" /*"mysql.railway.internal"*/,
  user: "root" /*process.env.MYSQLUSER*/,
  password: "jZdhpfXPikGFLgmOwZIrVkbjWgZKJcSn" /*process.env.MYSQL_DATABASE*/,
  database: "railway" /*process.env.MYSQL_ROOT_PASSWORD*/,
  waitForConnections: true,
  connectionLimit: 50, // Max open connections
  queueLimit: 0, // No limit on queued requests
  port: 53697 /*Number(process.env.MYSQLPORT)*/,
});

export { connection };
