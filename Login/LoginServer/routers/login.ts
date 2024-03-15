import express, {Express, Router} from 'express';
import sql from 'mssql';
import cors from 'cors';
const dataBase = require('../connection.ts');

//Router
const router: Router = express.Router();

//Middleware
router.use(cors());
router.use(express.json());

//Query
router.get('/', async(req, res) => {
    try {
        const {email} = req.body;
        const {password} = req.body;

        const pool = await sql.connect(dataBase);
        const result = await pool.request()
            .input('email', sql.VarChar(50), email)
            .input('password', sql.VarChar(50), password)
            .execute('[dbo].[sp_login]');

        res.send(result.recordset);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Error executing SQL query'});
    }
})

export default router;