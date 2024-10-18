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

  router.get('/', (req, res) => {
    console.log("Test user route")
    res.json([
        { test: 'it hits the route though' },
      ]);
  });

  module.exports = router;
