import express, { Express, Router } from "express";
import sql from 'mssql';
import cors from 'cors';
import hashPassword from '../use-cases/hashPassword';
const dataBase = require('../connection');

//router
const router: Router = express.Router();

//middleware
router.use(cors());
router.use(express.json());

//Query
router.post('/', async(req, res) => {
    try {
        const {firstName, lastName, birthday, email, userName, password} = req.body;
        const passwordHash = await hashPassword(password);
    
        const pool = await sql.connect(dataBase);
        const result = await pool.request()
            .input('firstName', sql.VarChar(50), firstName)
            .input('lastName', sql.VarChar(50), lastName)
            .input('birthday', sql.VarChar(10), birthday)
            .input('email', sql.VarChar(50), email)
            .input('userName', sql.VarChar(50), userName)
            .input('passwordHash', sql.VarChar(sql.MAX), passwordHash)
            .output('message', sql.Bit)
            .execute('[dbo].[sp_insertUser]')
    
        return res.send(result.output.message);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Error executing SQL query'});
    }
});

export default router;