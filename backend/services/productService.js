const path = require('path');

const { readJsonFile } = require('../utils/fileUtils');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

async function getAllProducts() {
  return readJsonFile(productsFilePath);
}

module.exports = {
  getAllProducts,
};