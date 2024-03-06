import { Request, Response } from 'express';
import { product } from '../models/productModel';

const productModel = new product;

export class productController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productModel.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving the list of products.' });
    }
  }

  async createNewProduct (req: Request, res: Response) {
    const {product_id, name, description, seller_id, price, locale_id } = req.body;
    try {
      const newproduct = await productModel.createNewProduct(product_id, name, description, seller_id, price, locale_id);
      res.status(201).json({ message: 'Product created successfully', product: newproduct });
    } catch (error) {
      res.status(500).json({ error: 'Error creating new product.' });
    }
  }
};