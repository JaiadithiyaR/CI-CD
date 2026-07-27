const cors = require('cors');
const express = require('express');

const productRoutes = require('../routes/productRoutes');
const metaRoutes = require('../routes/metaRoutes');
const logger = require('../middleware/logger');
const notFound = require('../middleware/notFound');
const errorHandler = require('../middleware/errorHandler');
const appConfig = require('./appConfig');
const { sendSuccess } = require('../utils/responseHelpers');

function configureServer(app) {
  app.use(cors());
  app.use(express.json());
  app.use(logger);

  app.get('/', (req, res) => {
    sendSuccess(res, {
      data: {
        application: appConfig.displayName,
        environment: appConfig.environment,
      },
      message: 'DeployFlow API is running',
    });
  });

  app.use('/api', productRoutes);
  app.use('/api', metaRoutes);

  app.use(notFound);
  app.use(errorHandler);
}

module.exports = {
  configureServer,
};