import { db_pool } from "../config/database-connection";
import { Locale } from "../models/locale-model"

export type LocaleCreationParams = Pick<Locale, "name">;

export class LocaleService { 
  async getAllLocales() {
    try {
      const query = 'SELECT * FROM locale';
      const result = await db_pool.query(query);
      const locales: Locale[] = result.rows.map((row: any) => {
        return {
          locale_id: row.locale_id,
          name: row.name,
        };
      });
      return locales;
    } catch (error) {
      throw error;
    }
  }

  async createNewLocale (
    name: string) {
    try {
      const query = 'INSERT INTO locale (name) VALUES ($1) RETURNING *';
      const values = [name];
      const result = await db_pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};