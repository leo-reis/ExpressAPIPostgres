import express from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/message', function(req, res) {
    // res.sendFile(path.join(__dirname, '../ClientSide/index.html'));
    res.send('Hello World');
  });
  
app.listen(port);
console.log('Server started at http://localhost:' + port);