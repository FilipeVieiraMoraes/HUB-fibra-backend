const express = require('express');
const settingsController = require('../controllers/configuracoesControlador');

const router = express.Router();

router.get('/', settingsController.getSettings);
router.put('/:key', settingsController.updateSetting);

module.exports = router;
