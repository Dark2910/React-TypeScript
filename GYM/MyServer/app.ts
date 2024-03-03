import express from 'express';
const app = express();


//routers
const routerD = require('./routers/routerDeportivas.ts')
app.use('/api/rd', routerD);

const router = express.Router();
app.use('/', router);

//query
router.get('/', async(req, res) => {
    res.send('Hello. 😎');
});


const PORT = 3000;
const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`${URL} Server listening...`);
})
