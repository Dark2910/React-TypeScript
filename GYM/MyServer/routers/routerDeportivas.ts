import express from 'express';
import cors from 'cors';
import sql, { MAX } from 'mssql';

const router = express.Router();
const dataBase = require('../connection.ts');

//middleware
router.use(cors());
router.use(express.json());

router.get('/', async(req, res) => {
    try {
        const {sort} = req.query;

        sql.connect(dataBase);
        const result = await sql.query(`SELECT * FROM deportes`);

        if(Array.isArray(result.recordset) && sort === 'desc') {
            result.recordset.sort((sportA, sportB) => sportB.id_deporte - sportA.id_deporte);
        }

        return res.json(result.recordset);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error executing SQL query' });
    }
})

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;

        const pool = await sql.connect(dataBase);
        const result = await pool.request()
            .input('id_deporte',sql.Int, id)
            .execute('sp_deporte_get');

        if(result.recordset && result.recordset.length > 0) {
            return res.json(result.recordset);

        } else {
            return res.status(404).end();
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error executing SQL request' });
    }
});

router.post('/', async(req, res) => {
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

        return res.status(200).json({ message: 'Sport posted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error executing SQL request' });
    };
});

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const {objective} = req.body;
        const {description} = req.body;

        const pool = await sql.connect(dataBase);
        await pool.request()
            .input('id_deporte', sql.Int, id)
            .input('deporte_nombre', sql.NVarChar(50), name)
            .input('deporte_objetivo', sql.NVarChar(MAX), objective)
            .input('deporte_descripcion', sql.NVarChar(MAX), description)
            .execute('[dbo].[sp_deporte_update]');

        return res.status(200).json({ message: 'Sport putted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error executing SQL request' });
    };
});

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;

        const pool = await sql.connect(dataBase);
        await pool.request()
            .input('id_deporte', sql.Int, id)
            .execute('[dbo].[sp_deporte_drop]');

        return res.status(200).json({ message: 'Sport deleted successfully' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error executing SQL request' });
    }
});

module.exports = router;