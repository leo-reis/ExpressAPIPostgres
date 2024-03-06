import express from 'express';
import cors from 'cors';
import { router } from './routes/entities';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); 
app.use('/', router);
app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
