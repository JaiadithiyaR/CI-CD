const express = require('express');
const { getVersion, getHealth } = require('../controllers/metaController');

const router = express.Router();

router.get('/version', getVersion);
router.get('/health', getHealth);

module.exports = router;
