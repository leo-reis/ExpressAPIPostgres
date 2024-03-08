import { db_pool } from "../config/databaseConnection";
import { Locale } from "../models/localeModel"

export type LocaleCreationParams = Pick<Locale, "locale_id" | "name">;

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
    locale_id: number, 
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