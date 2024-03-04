import 'dotenv/config'

const dbConfig: {} = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true, 
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

module.exports = dbConfig;