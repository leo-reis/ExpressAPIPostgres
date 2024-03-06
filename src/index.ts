import express from 'express';
import cors from 'cors';
import { router } from './routes/entities';
import { loginrouter } from './routes/login';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.redirect('/login');
});
app.use(express.json()); 
app.use('/', loginrouter);
app.use('/', router);
app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
