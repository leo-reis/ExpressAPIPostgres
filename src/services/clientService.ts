import { db_pool } from "../config/databaseConnection";
import { Client } from "../models/clientModel"

export type ClientCreationParams = Pick<Client, "name" | "email" | "phone_number">;

export class ClientService { 
  async getAllClients() {
    try {
      const query = 'SELECT * FROM client';
      const result = await db_pool.query(query);
      const clients: Client[] = result.rows.map((row: any) => {
      return {
          client_id: row.client_id,
          name: row.name,
          email: row.email,
          phone_number: row.phone_number,
        };
      });
      return clients;
    } catch (error) {
      throw error;
    }
  }

  async createNewClient (
    name: string, 
    email: string, 
    phone_number: string | null) {
    try {
      const query = 'INSERT INTO client (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, phone_number];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};