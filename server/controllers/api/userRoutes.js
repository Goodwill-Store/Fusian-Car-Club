const router = require('express').Router();
const { User } = require('../../models');

//create user
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      console.log(userData);
      //added this to get user ID saved to session///ANA
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(req.body);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log(req.body.username);

    // Get username and password from the request
    const userData = await User.findOne({ where: { user_name: req.body.username } });

    // Check if userData exists before checking the password
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
    }

    const validPassword = await userData.checkPassword(req.body.password);  // Assuming checkPassword is async

    if (validPassword) {
      // Save session and return success response
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.username = userData.user_name;
        console.log(req.sessionID);
        res.json({ sessionID: req.sessionID });
      });
    } else {
      // Incorrect password
      res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/session', (req, res) => {
  console.log('/session');
  if (req.session.logged_in) {
    // Return relevant session details
    console.log(req.session.username);
    res.json({
      username: req.session.username,
      logged_in: req.session.logged_in,
    });
  } else {
    res.json({ logged_in: false });
  }
});

router.get('/', (req, res) => {
  console.log("Test user route")
  res.json([
    { test: 'it hits the route though' },
  ]);
});

module.exports = router;
