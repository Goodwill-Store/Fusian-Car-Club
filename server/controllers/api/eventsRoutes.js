const router = require('express').Router();
const { Events } = require('../../models');
const { Op } = require('sequelize');

// Route to get all events where the date is today or greater
router.get('/', async (req, res) => {
    try {
        const today = new Date(); // Get the current date
        today.setHours(0, 0, 0, 0); // Set time to midnight

        const upcomingEvents = await Events.findAll({
            where: {
                date: {
                    [Op.gte]: today // Get events where date is today or greater
                }
            },
            order: [['date', 'ASC']] //Order events by date
        });

        res.status(200).json(upcomingEvents);
    } catch (err) {
        console.error('Error fetching upcoming events:', err);
        res.status(500).json({ message: 'An error occurred while fetching events.', error: err.message });
    }
});

// TODO: ADD A POST ROUTE TO CREATE EVENTS. YOU CAN REFERENCE router.post('/create'... FUNCTION FROM THE blogRoutes.js MODULE

router.post('/create', async (req, res) => {

    try {
        const { title, body, date, image, location } = req.body;

        const newEvent = await Events.create({
            title,
            body,
            location,
            image,
            date

        });

        res.status(200).json(newEvent);
    } catch (err) {
        console.error('Error fetching upcoming events:', err);
        res.status(500).json({ message: 'An error occurred while fetching events.', error: err.message });
    }
});

module.exports = router;
