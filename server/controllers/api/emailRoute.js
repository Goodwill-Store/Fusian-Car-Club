// routes/email.js
// DO NOT USE
//***********THIS WHOLE MODULE IS JUST FOR TESTING, TO MAKE SURE EMAILS ACTUALLY GO THROUGH (Ana)*/

// THE EMAIL CONFIG FOR THE EMAIL WE USE TO SEND THE NEWSLETTER FROM IS IN THE .ENV FILE, IF YOU GET ERROR YOU PROBABLY HAVE THE OLD ENV FILE THAT DOESN'T HAVE EMAIL CONFIG
const sendMail = require('../../utils/mailer');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        await sendMail(
            'anastasiatarasenko095@gmail.com',           // Receiver's email
            'Welcome!',                   // Email subject
            'Welcome to our service!',    // Plain text body
            '<b>Welcome to our service!</b>' // HTML body
        );
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

module.exports = router;
