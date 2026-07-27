const productService = require('../services/productService');
const { sendSuccess } = require('../utils/responseHelpers');

async function getProducts(req, res, next) {
  try {
    const products = await productService.getAllProducts();
    sendSuccess(res, {
      data: products,
      message: 'Demo components retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
};
