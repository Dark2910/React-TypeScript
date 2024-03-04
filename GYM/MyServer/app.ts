import 'dotenv/config'
import express from 'express';
const app = express();


//routers
const routerD = require('./routers/routerDeportivas.ts')
app.use('/api/sports', routerD);

const router = express.Router();
app.use('/', router);

//query
router.get('/', async(req, res) => {
    res.send('Hello. 😎');
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} Server listening...`);
})
