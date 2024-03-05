import { db_pool } from "../config/databaseConnection";

export class client { 
  async getAllClients() {
    try {
      const query = 'SELECT * FROM client';
      const result = await db_pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async createNewClient (
    client_id: string, 
    name: string, 
    email: string, 
    phone_number: string) {
    try {
      const query = 'INSERT INTO client (client_id, name, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [client_id, name, email, phone_number];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};