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

router.post('/create', async (req, res) => {
    try {
        const { title, content, authorId } = req.body;

        // Check if admin
        if (!req.session.admin) {
            return res.status(403).json({ message: 'Unauthorized. Only admins can create blog posts.' });
        }

        // i dont like how this looks, frontend will validate form inputs so maybe we dont need that at all... ?
        if (!title || !content || !authorId) {
            return res.status(400).json({ message: 'Title, content, and authorId are required.' });
        }

        // Create a new post
        const newPost = await Post.create({
            title,
            content,
            authorId
        });

        res.status(201).json(newPost);
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ message: 'An error occurred while creating the post.', error: err.message });
    }
});


module.exports = router;
