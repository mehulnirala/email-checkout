import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import path from 'path';
import { closeCheckout, openCheckout } from './checkout/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT||3000;
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
  res.send('done!')
});

app.post('/', (req: Request, res: Response) => {
  res.send('done!')
});

app.post('/checkout', (req: Request, res: Response) => {
  openCheckout(req.body).then((checkoutId: string|undefined) => {
    res.send({checkoutId})
  }).catch((error) => res.send(error));
});


app.post('/close-checkout', (req: Request, res: Response) => {
  closeCheckout(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
