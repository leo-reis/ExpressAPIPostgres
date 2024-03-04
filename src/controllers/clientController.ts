import { Request, Response } from 'express';

const clientModel = require('../models/clientModel');

const clientController = {
  getAllClients: async (req: Request, res: Response) => {
    try {
      const clients = await clientModel.getAllClients();
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving the list of clients.' });
    }
  }
};

module.exports = clientController;