import { db_pool } from "../config/databaseConnection";
import { Seller } from "../models/sellerModel"

export type SellerCreationParams = Pick<Seller, "name" | "email" | "phone_number">;

export class SellerService { 
  async getAllSellers() {
    try {
      const query = 'SELECT * FROM seller';
      const result = await db_pool.query(query);
      const sellers: Seller[] = result.rows.map((row: any) => {
      return {
        seller_id: row.seller_id,
        name: row.name,
        email: row.email,
        phone_number: row.phone_number
      };
    });
      return sellers;
    } catch (error) {
      throw error;
    }
  }

  async createNewSeller (
    name: string, 
    email: string, 
    phone_number: string) {
    try {
      const query = 'INSERT INTO seller (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, phone_number];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};