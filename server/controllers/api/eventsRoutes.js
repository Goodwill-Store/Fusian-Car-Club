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

        console.log("Hi")
        const { title, date, location, image, body } = req.body;
        const author = req.session.user_id;

        // Check if user is an admin
        if (!req.session.admin) {
            return res.status(403).json({ message: 'Unauthorized. Only admins can create blog posts.' });
        }


        const newEvent = await Events.create({
            title,
            body,
            date,
            location,
            image,
        });

        res.status(201).json(newEvent);
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ message: 'An error occurred while creating the post.', error: err.message });
    }
});

module.exports = router;
