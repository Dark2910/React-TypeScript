import express from 'express';
import cors from 'cors';
import sql from 'mssql';

const router = express.Router();
const dataBase = require('../connection.ts');

// Middleware
router.use(cors());
router.use(express.json());

router.get('/:idGroup', async(req, res) => {
    try {
        const {idGroup} = req.params;

        const pool= await sql.connect(dataBase);
        const result= await pool.request()
            .input('id_grupo', sql.Int, idGroup)
            .execute('[dbo].[sp_deportistas_get]');

        return res.json(result.recordset);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error executing SQL query' });
    }
});

module.exports = router;