require('dotenv').config();

const express = require('express');
const { configureServer } = require('./config/serverConfig');
const appConfig = require('./config/appConfig');

const app = express();
const port = appConfig.port;

configureServer(app);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
