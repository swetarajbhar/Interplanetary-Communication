import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/earth-mars-communication';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});