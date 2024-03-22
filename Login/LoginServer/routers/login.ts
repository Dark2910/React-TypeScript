import express, { Router} from 'express';
import sql from 'mssql';
import cors from 'cors';
import comparePasswords from '../use-cases/comparePasswords';
import hashPassword from '../use-cases/hashPassword';
const dataBase = require('../connection');

//Router
const router: Router = express.Router();

//Middleware
router.use(cors());
router.use(express.json());

//Query
router.post('/', async(req, res) => {
    try {
        const {email, password} = req.body;

        const pool = await sql.connect(dataBase);
        const result = await pool.request()
            .input('email', sql.VarChar(50), email)
            .output('password', sql.VarChar(sql.MAX))
            .execute('[dbo].[sp_login]');

        const match = await comparePasswords(password, result.output.password);

        return res.send(match);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Error executing SQL query'});
    }
})

export default router;