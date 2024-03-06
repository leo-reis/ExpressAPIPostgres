import { db_pool } from "../config/databaseConnection";

export class seller { 
  async getAllSellers() {
    try {
      const query = 'SELECT * FROM seller';
      const result = await db_pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async createNewSeller (
    seller_id: number, 
    name: string, 
    email: string, 
    phone_number: string) {
    try {
      const query = 'INSERT INTO seller (seller_id, name, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [seller_id, name, email, phone_number];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};