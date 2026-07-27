const packageJson = require('../package.json');

const appConfig = {
  applicationName: 'DeployFlow',
  displayName: 'DeployFlow',
  version: packageJson.version,
  environment: process.env.NODE_ENV || 'development',
  build: process.env.APP_BUILD || 'local-dev',
  commit: process.env.APP_COMMIT || 'development',
  port: Number(process.env.PORT || 5000),
};

module.exports = appConfig;