require('dotenv').config()
const express = require('express');
const connectToMongoDB = require('./lib/db');
const productRouter = require('./router/productRouter')

const app = express();
const PORT = process.env.PORT; // Set a port (here, 3000) or use an environment variable for production
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json())
app.use('/product',productRouter)

const db = connectToMongoDB()

