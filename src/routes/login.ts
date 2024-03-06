import express from 'express';

export const loginrouter = express.Router();

try {
    loginrouter.get('/login',  (req, res) => {
    res.send('This should be a login page...');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }