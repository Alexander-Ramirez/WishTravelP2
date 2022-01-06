const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cityRoutes = require('./cityRoutes');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);

module.exports = router;
