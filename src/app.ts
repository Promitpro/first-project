/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

//api/v1/students/create-student

//application routes
app.use('/api/v1', router);
const test = async (req: Request, res: Response) => {
  Promise.reject();
};

app.get('/', test);
// const getAController = (req: Request, res: Response) => {
//   const a = 10;

//   res.send(a);
// };
// app.get('/', getAController);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
