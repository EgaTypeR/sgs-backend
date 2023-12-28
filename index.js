require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connectToMongoDB = require('./lib/db');
const productRouter = require('./router/productRouter')

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your allowed frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
};
app.use(express.json())
app.use(cors(corsOptions))
app.use('/product',productRouter)

const PORT = process.env.PORT; // Set a port (here, 3000) or use an environment variable for production
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const db = connectToMongoDB()

