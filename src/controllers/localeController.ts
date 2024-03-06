import { Request, Response } from 'express';
import { locale } from '../models/localeModel';

const localeModel = new locale;

export class localeController {
  async getAllLocales(req: Request, res: Response) {
    try {
      const locales = await localeModel.getAllLocales();
      res.status(200).json(locales);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving the list of locales.' });
    }
  }

  async createNewLocale (req: Request, res: Response) {
    const { locale_id, name } = req.body;
    try {
      const newlocale = await localeModel.createNewLocale(locale_id, name);
      res.status(201).json({ message: 'Locale created successfully', locale: newlocale });
    } catch (error) {
      res.status(500).json({ error: 'Error creating new locale.' });
    }
  }
};