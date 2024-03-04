const db = require('../config/databaseConnection');

const client = {
  getAllClients: async () => {
    try {
      const query = 'SELECT * FROM client';
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },
  createNewClient: async (
    client_id: string, 
    name: string, 
    email: string, 
    phone_number: string) => {
    try {
      const query = 'INSERT INTO client (client_id, name, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [client_id, name, email, phone_number];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};

module.exports = client;