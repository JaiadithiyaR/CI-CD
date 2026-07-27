const fs = require('fs/promises');

async function readJsonFile(filePath) {
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

module.exports = {
  readJsonFile,
};