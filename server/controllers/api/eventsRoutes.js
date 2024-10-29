const router = require('express').Router();
const { Events } = require('../../models');
const { Op } = require('sequelize');

// Route to get all events where the date is today or greater
router.get('/', async (req, res) => {
    try {
        const today = new Date(); // Get the current date
        today.setHours(0, 0, 0, 0); // Set time to midnight to ignore time part

        const upcomingEvents = await Events.findAll({
            where: {
                date: {
                    [Op.gte]: today // Get events where date is today or greater
                }
            },
            order: [['date', 'ASC']] // Optional: Order events by date
        });

        res.status(200).json(upcomingEvents);
    } catch (err) {
        console.error('Error fetching upcoming events:', err);
        res.status(500).json({ message: 'An error occurred while fetching events.', error: err.message });
    }
});

module.exports = router;
