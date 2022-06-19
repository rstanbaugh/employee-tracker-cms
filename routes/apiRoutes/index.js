const express = require('express');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;
