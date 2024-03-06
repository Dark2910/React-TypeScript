import 'dotenv/config'
import express from 'express';
const app = express();

//routers
const routerA = require('./routers/routerDeportistas.ts');
app.use('/api/athletes', routerA);

const routerS = require('./routers/routerDeportivas.ts');
app.use('/api/sports', routerS);

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
