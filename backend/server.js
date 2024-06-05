const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionRoutes = require('./routes/index');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
