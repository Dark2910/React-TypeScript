import express from 'express';
import cors from 'cors';
import sql, { MAX, pool } from 'mssql';

const router = express.Router();
const dataBase = require('../connection.ts');

//middleware
router.use(cors());
router.use(express.json());

//get
router.get('/sports', async(req, res) => {
    try {
        sql.connect(dataBase);
        const result = await sql.query(`SELECT * FROM deportes`);
        const {sort} = req.query;

        if(Array.isArray(result.recordset)  && sort === 'des') {
            result.recordset.sort((sportA, sportB) => sportB.id_deporte - sportA.id_deporte);
        }

        return res.json(result.recordset);
    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
})

router.get('/sports/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const pool = await sql.connect(dataBase);
        const result = await pool.request()
            .input('id_deporte', Number(id))
            .execute('sp_deporte_get');

        if(result.recordset && result.recordset.length > 0) {
            return res.json(result.recordset);

        } else {
            return res.status(404).end();
        }

    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
});

router.post('/sports', async(req, res) => {
    try {
        const {name} = req.body;
        const {objective} = req.body;
        const {description} = req.body;

        const pool = await sql.connect(dataBase);
        
        await pool.request()
            .input('deporte_nombre', sql.NVarChar(50), name)
            .input('deporte_objetivo', sql.NVarChar(MAX), objective)
            .input('deporte_descripcion', sql.NVarChar(MAX), description)
            .execute('[dbo].[sp_deporte_post]');

        res.status(200).json({ message: 'Sport posted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
});

module.exports = router;