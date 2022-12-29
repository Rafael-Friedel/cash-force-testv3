const express = require('express');
const routerOrders = require('./routes/orders.route.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/orders', routerOrders);

app.get('/', (_req, res) =>
  res.send('<h1 style="color: blue">SERVIDOR CASHFORCE</h1>')
);

app.listen(3001, () => console.log('Servidor iniciado na porta 3001'));
