function sendSuccess(res, { data = null, message = 'Request completed successfully', statusCode = 200 } = {}) {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  });
}

function sendError(res, { message = 'Internal Server Error', statusCode = 500 } = {}) {
  return res.status(statusCode).json({
    success: false,
    message,
  });
}

module.exports = {
  sendSuccess,
  sendError,
};