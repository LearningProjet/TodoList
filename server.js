const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const db = require('./db/db');
const taskRoutes = require('./routers/taskRoutes');

const app = express();
const port = 6532;

app.use(bodyParser.json());


app.use(cors());

app.use('/tasks', taskRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
