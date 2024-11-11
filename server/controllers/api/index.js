const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const userRoutes = require('./userRoutes')
const eventsRoutes = require('./eventsRoutes')
const merchRoutes = require('./merchRoutes')

router.use('/', apiRoutes);
router.use('/user', userRoutes);
router.use('/events', eventsRoutes);
router.use('/merch', merchRoutes);


module.exports = router;
