import { db_pool } from "../config/databaseConnection";
import { Seller } from "../models/sellerModel"

export type SellerCreationParams = Pick<Seller, "seller_id" | "name" | "email" | "phone_number">;

export class SellerService { 
  async getAllSellers() {
    try {
      const query = 'SELECT * FROM seller';
      const result = await db_pool.query(query);
      const sellers: Seller[] = result.rows.map((row: any) => {
        return {
          seller_id: row.seller_id,
          name: row.name,
          email: row.description,
          phone_number: row.price
        };
      });
      return sellers;
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