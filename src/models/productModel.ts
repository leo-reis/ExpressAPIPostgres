import { db_pool } from "../config/databaseConnection";

export class product { 
  async getAllProducts() {
    try {
      const query = 'SELECT * FROM product';
      const result = await db_pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async createNewProduct (
    product_id: string, 
    name: string, 
    description: string, 
    seller_id: number,
    price: number,
    locale_id: number) {
    try {
      const query = 'INSERT INTO product (product_id, name, email, phone_number) VALUES ($1, $2) RETURNING *';
      const values = [product_id, name, description, seller_id, price, locale_id];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};