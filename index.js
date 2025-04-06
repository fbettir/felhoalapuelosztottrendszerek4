require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const session = require('express-session');
const imageController = require('./imageController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_CONNECTION, {
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 80;

app.use('/api/images', imageController);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});