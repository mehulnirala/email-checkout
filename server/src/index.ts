import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { createCheckout, getPaymentMethods, getCustomersList } from './checkout';

dotenv.config();

const app: Express = express();
const port = process.env.PORT||3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
//   // console.log(req);
//   // res.sendFile('public/index.html', {root: __dirname })
//   // getPaymentMethods({country: 'IN', currency: 'INR'}).then(data => res.send(JSON.stringify(data, null, 2)));
//   // createCheckout({ amount: 1, country: 'IN', currency: 'INR', customerId: 'customerId'}).then(data => res.send(data));
//   // getCustomersList().then((data)=>res.send(data));
  res.send('done!')
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
