import { db_pool } from "../config/databaseConnection";
import { Product } from "../models/productModel"

export type ProductCreationParams = Pick<Product, "name" | "description" | "seller_id" | "price" | "locale_id">;

export class ProductService { 
  async getAllProducts() {
    try {
      const query = 'SELECT * FROM product';
      const result = await db_pool.query(query);
      const products: Product[] = result.rows.map((row: any) => {
        return {
          product_id: row.product_id,
          name: row.name,
          description: row.description,
          seller_id: row.seller_id,
          price: row.price,
          locale_id: row.locale_id
        };
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  async createNewProduct (
    name: string, 
    description: string, 
    seller_id: number,
    price: number,
    locale_id: number) {
    try {
      const query = 'INSERT INTO product (name, description, seller_id, price, locale_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      const values = [name, description, seller_id, price, locale_id];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};