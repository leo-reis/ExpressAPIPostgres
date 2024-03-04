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
  }
};

module.exports = client;