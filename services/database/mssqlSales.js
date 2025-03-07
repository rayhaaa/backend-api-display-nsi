const mssql = require('mssql');

const config = {
  user: 'sa',
  password: 'P@ssw0rd',
  server: 'sapbi2',
  database: 'SBO_NSI_USD_LIVE',
  pool: {
    idleTimeoutMillis: 3600000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
    // connectTimeout: 20000,
    connectionTimeout: 20000,
  },
};

const pool = new mssql.ConnectionPool(config);
const conn = pool.connect();

conn.then(() => {
  console.log('Connected to SQL Server Sales');
}).catch((err) => {
  console.error('Error connecting to SQL Server Sales:', err);
});

module.exports = conn;
