const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000; // Set a port (here, 3000) or use an environment variable for production
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
