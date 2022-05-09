import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { createCheckout } from './checkout';

dotenv.config();

const app: Express = express();
const port = process.env.PORT||3000;

app.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.sendFile('public/index.html', {root: __dirname })
  // createCheckout({ amount: 1, country: 'US', currency: 'USD', customerId: 'customerId'}).then(data => res.send(data));
});


app.post('/', (req: Request, res: Response) => {
  console.log(req);
  res.send('done!')
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});