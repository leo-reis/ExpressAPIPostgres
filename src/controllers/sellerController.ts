import { Request, Response } from 'express';
import { seller } from '../models/sellerModel';

const sellerModel = new seller;

export class sellerController {
  async getAllSellers(req: Request, res: Response) {
    try {
      const sellers = await sellerModel.getAllSellers();
      res.status(200).json(sellers);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving the list of sellers.' });
    }
  }

  async createNewSeller (req: Request, res: Response) {
    const { seller_id, name, email, phone_number } = req.body;
    try {
      const newseller = await sellerModel.createNewSeller(seller_id, name, email, phone_number);
      res.status(201).json(newseller);
    } catch (error) {
      res.status(500).json({ error: 'Error creating new seller.' });
    }
  }
};