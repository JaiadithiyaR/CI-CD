const appConfig = require('../config/appConfig');

function getVersion() {
  return {
    application: appConfig.applicationName,
    version: appConfig.version,
    build: appConfig.build,
    commit: appConfig.commit,
    environment: appConfig.environment,
  };
}

function getHealth() {
  const uptimeInSeconds = Math.max(0, Math.floor(process.uptime()));

  return {
    application: appConfig.applicationName,
    status: 'UP',
    environment: appConfig.environment,
    version: appConfig.version,
    build: appConfig.build,
    node: process.version,
    uptime: `${uptimeInSeconds} seconds`,
    timestamp: new Date().toISOString(),
  };
}

module.exports = {
  getVersion,
  getHealth,
};