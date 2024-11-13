const router = require('express').Router();
const { Post, User } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{
                model: User,
                attributes: ['user_name'],
            }],
            order: [['id', 'DESC']],
        });

        const formattedPosts = posts.map(post => ({
            ...post.toJSON(),
            author: post.user ? post.user.user_name : null,
        }));

        res.status(200).json(formattedPosts);
    } catch (err) {
        console.error('Error fetching Post:', err);
        res.status(500).json({ message: 'An error occurred while fetching Post.', error: err.message });
    }
});

router.post('/create', async (req, res) => {
    try {
        const { title, body } = req.body;
        const author = req.session.user_id;

        // Check if user is an admin
        if (!req.session.admin) {
            return res.status(403).json({ message: 'Unauthorized. Only admins can create blog posts.' });
        }


        const newPost = await Post.create({
            title,
            body,
            author,
        });

        res.status(201).json(newPost);
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ message: 'An error occurred while creating the post.', error: err.message });
    }
});

module.exports = router;
