const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const userRoutes = require('./userRoutes')
const eventsRoutes = require('./eventsRoutes')

router.use('/', apiRoutes);
router.use('/user', userRoutes);
router.use('/events', eventsRoutes);


module.exports = router;
