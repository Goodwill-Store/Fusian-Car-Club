const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const userRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');
const merchRoutes = require('./merchRoutes');
const blogRoutes = require('./blogRoutes');
const emailRoute = require('./emailRoute');
const newsletterRoute = require('./newsletterRoute');

router.use('/', apiRoutes);
router.use('/user', userRoutes);
router.use('/events', eventsRoutes);
router.use('/merch', merchRoutes);
router.use('/blog', blogRoutes);
router.use('/email', emailRoute);
router.use('/newsletter', newsletterRoute);

module.exports = router;
