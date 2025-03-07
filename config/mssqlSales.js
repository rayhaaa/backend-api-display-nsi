const mssql = require('mssql');

const config = {
  user: 'sa',
  password: 'P@ssw0rd',
  server: 'sapbi2',
  database: 'SBO_NSI_USD_LIVE',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    connectionTimeout: 60000,
    requestTimeout: 30000,
    stream: true,
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
