const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express()
const port = 5000
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');

const User = require('./models/User');
const Rental = require('./models/Rental');

const userRoutes = require('./routes/userRoutes')
const rentalsData = require('./routes/rentalsData');

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', userRoutes);
app.use('/api', rentalsData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})