const router = require('express').Router();
const { User } = require('../../models');

//create user
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        user_name: req.body.user_name,
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
      res.status(400).json(err);
    }
  });

  module.exports = router;
