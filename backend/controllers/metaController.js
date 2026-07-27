const systemService = require('../services/systemService');
const { sendSuccess } = require('../utils/responseHelpers');

function getVersion(req, res) {
  sendSuccess(res, {
    data: systemService.getVersion(),
    message: 'Version retrieved successfully',
  });
}

function getHealth(req, res) {
  sendSuccess(res, {
    data: systemService.getHealth(),
    message: 'Health retrieved successfully',
  });
}

module.exports = {
  getVersion,
  getHealth,
};
