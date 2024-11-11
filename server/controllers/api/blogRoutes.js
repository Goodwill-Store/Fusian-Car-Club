const router = require('express').Router();
const { Post } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({});
        res.status(200).json(posts);
    } catch (err) {
        console.error('Error fetching Post:', err);
        res.status(500).json({ message: 'An error occurred while fetching Post.', error: err.message });
    }
});

module.exports = router;
