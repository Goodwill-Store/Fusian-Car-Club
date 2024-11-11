const router = require('express').Router();
const { User } = require('../../models');

//create user
router.post('/signup', async (req, res) => {
  try {
    console.log("signup");
    const existingUser = await User.findOne({
      where: {
        user_name: req.body.username,
      },
    });

    if (existingUser) {
      console.log('Username already exists');
      return res.status(400).json({ message: 'Username already exists.' });
    }
    // Check for existing email
    const existingEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existingEmail) {
      console.log('Email already exists');
      return res.status(400).json({ message: 'Email already exists.' });
    }
    const userData = await User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      //set user rolde to 'user
      role: 1
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Signup error:', err); // Log the error details
    console.log(req.body); // Log the request body for additional context
    res.status(400).json({ message: 'Signup failed. Please try again.', error: err.message });
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

// logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to logout. Please try again.' });
      }
      res.status(200).json({ message: 'Successfully logged out.' });
    });
  } else {
    res.status(400).json({ message: 'No user is logged in.' });
  }
});

router.get('/', (req, res) => {
  console.log("Test user route")
  res.json([
    { test: 'it hits the route though' },
  ]);
});

module.exports = router;
