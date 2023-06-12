const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();

router.get('/', ctr.getAllCards);

module.exports = router;
