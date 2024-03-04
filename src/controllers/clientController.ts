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
  },
  createNewClient: async (req: Request, res: Response) => {
    const { client_id, name, email, phone_number } = req.body;
    try {
      const newClient = await clientModel.createNewClient(client_id, name, email, phone_number);
      res.status(201).json(newClient);
    } catch (error) {
      res.status(500).json({ error: 'Error creating new client.' });
    }
  }
};

module.exports = clientController;