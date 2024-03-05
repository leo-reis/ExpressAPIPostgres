import express from 'express';
import cors from 'cors';
import { clientController } from './controllers/clientController';
import { localeController } from './controllers/localeController';
import { productController } from './controllers/productController';
import { sellerController } from './controllers/sellerController';
const client_controller = new clientController;
const locale_controller = new localeController;
const product_controller = new productController;
const seller_controller = new sellerController;

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); 

try {
  app.get('/client', client_controller.getAllClients);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.post('/client', client_controller.createNewClient);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.get('/locale', locale_controller.getAllLocales);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.post('/locale', locale_controller.createNewLocale);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.get('/product', product_controller.getAllProducts);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.post('/product', product_controller.createNewProduct);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.get('/seller', seller_controller.getAllSellers);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.post('/seller', seller_controller.createNewSeller);
} catch (error) {
  console.error(error);
  process.exit(1);
}

app.get('/message', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
