import express from 'express';
import cors from 'cors'
import usersRouter from './modules/users/users.routes.js';
import productsRouter from './modules/products/products.routes.js';
import DBConnection from './DB/connection.js';

const app = express();
const port = 5000;

DBConnection();

app.use(express.json());
app.use(cors());

app.use(`/users`,usersRouter);
app.use(`/products`, productsRouter);

app.listen(port, () => {
    console.log(`Server is Working..`);
});