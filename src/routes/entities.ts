import express from 'express';
import { clientController } from '../controllers/clientController';
import { localeController } from '../controllers/localeController';
import { productController } from '../controllers/productController';
import { sellerController } from '../controllers/sellerController';

const client_controller = new clientController;
const locale_controller = new localeController;
const product_controller = new productController;
const seller_controller = new sellerController;


export const router = express.Router();

try {
    router.get('/client', client_controller.getAllClients);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.post('/client', client_controller.createNewClient);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.get('/locale', locale_controller.getAllLocales);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.post('/locale', locale_controller.createNewLocale);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.get('/product', product_controller.getAllProducts);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.post('/product', product_controller.createNewProduct);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.get('/seller', seller_controller.getAllSellers);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  try {
    router.post('/seller', seller_controller.createNewSeller);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }