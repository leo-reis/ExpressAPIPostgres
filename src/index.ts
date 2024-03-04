import express from 'express';
import cors from 'cors';
const clientController = require('./controllers/clientController');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); 

try {
  app.get('/client', clientController.getAllClients);
} catch (error) {
  console.error(error);
  process.exit(1);
}

try {
  app.post('/client', clientController.createNewClient);
} catch (error) {
  console.error(error);
  process.exit(1);
}

app.get('/message', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
