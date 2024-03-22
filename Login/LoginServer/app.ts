import 'dotenv/config';
import express, {Express} from 'express';
import routerLogin from './routers/login';
import routerRegister from './routers/register';

const app: Express = express();

app.use('/api/login', routerLogin);
app.use('/api/register', routerRegister);

const PORT = process.env.PORT;
const SERVER = process.env.SERVER;

app.listen(PORT, () => {
    console.log(`http://${SERVER}:${PORT} Server listening...`);
});