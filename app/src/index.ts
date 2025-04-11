import express, { Application } from 'express';
import { config } from './config/config.js';
import router from './routes/routes.js';

const app:Application = express();
const PORT:number = config.PORT; 

app.use(router);

const server = app.listen(PORT,()=>{
  console.log('server run on port',PORT);
});

export {server,app}