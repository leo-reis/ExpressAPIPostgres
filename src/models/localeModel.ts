import { db_pool } from "../config/databaseConnection";

export class locale { 
  async getAllLocales() {
    try {
      const query = 'SELECT * FROM locale';
      const result = await db_pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async createNewLocale (
    locale_id: string, 
    name: string) {
    try {
      const query = 'INSERT INTO locale (locale_id, name) VALUES ($1, $2) RETURNING *';
      const values = [locale_id, name];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};