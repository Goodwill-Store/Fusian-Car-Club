const router = require('express').Router();
const { User } = require('../../models');

router.post('/subscribe', async (req, res) => {
    try {
        console.log("subscribe");

        // Check if email is provided
        if (!req.body.email) {
            return res.status(400).json({ message: 'Email is required.' });
        }
        const existingUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });


        //since the subscribe button is not behind login, not every user that subscribes has the account (curretnly that will cause en error), I think we need a seperate table, just for the emails of sunscribed none registered users 

        // No user with this email
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        existingUser.subscribed = true;
        await existingUser.save();

        // Send response
        res.status(200).json({ message: 'User successfully subscribed.', user: existingUser });
    } catch (err) {
        console.error('subscribe error:', err); // Log error 
        res.status(500).json({ message: 'Subscription failed. Please try again.', error: err.message });
    }
});

module.exports = router;
