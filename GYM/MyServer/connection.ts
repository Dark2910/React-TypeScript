const dbConfig: {} = {
    user: 'sa',
    password: '<Eiae001029>',
    server: '192.168.1.70',
    database: 'Deportivas_TEST',
    options: {
        encrypt: true, 
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

module.exports = dbConfig;