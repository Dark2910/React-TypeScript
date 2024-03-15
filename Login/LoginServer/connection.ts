import 'dotenv/config';

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev
    }
};

module.exports = dbConfig;