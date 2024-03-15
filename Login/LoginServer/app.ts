import 'dotenv/config';
import express, {Express} from 'express';
import routerLogin from './routers/login';

const app: Express = express();

app.use('/api/login', routerLogin);

const PORT = process.env.PORT;
const SERVER = process.env.SERVER;

app.listen(PORT, () => {
    console.log(`http://${SERVER}:${PORT} Server listening...`);
});