import { db_pool } from "../config/databaseConnection";
import { Client } from "../models/clientModel"

export type ClientCreationParams = Pick<Client, "client_id" | "name" | "email" | "phone_number">;

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
    client_id: number, 
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