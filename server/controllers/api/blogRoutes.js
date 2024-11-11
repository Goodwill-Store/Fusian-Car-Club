const router = require('express').Router();
const { Post, User } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{
                model: User,       // The model to include
                attributes: ['user_name'],  // Only fetch the 'name' attribute of the User model
            }],
        });

        const formattedPosts = posts.map(post => ({
            ...post.toJSON(),
            author: post.user ? post.user.user_name : null,
        }));

        res.status(200).json(formattedPosts);

        // res.status(200).json(posts);
    } catch (err) {
        console.error('Error fetching Post:', err);
        res.status(500).json({ message: 'An error occurred while fetching Post.', error: err.message });
    }
});

module.exports = router;
