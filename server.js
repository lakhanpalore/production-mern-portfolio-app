const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//dotenv config ---- to use the environment variables written in .env file
dotenv.config();

//rest object ---- because we cant use express object directly
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname, './client/build')));

//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
//port
const PORT= process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});