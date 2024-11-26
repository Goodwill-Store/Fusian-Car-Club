const router = require('express').Router();
const { Inventory } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const items = await Inventory.findAll({
            where: {
                count: {
                    [Op.ne]: 0,  // Ensures count is not 0
                }
            }
        });

        res.status(200).json(items);
    } catch (err) {
        console.error('Error fetching inventory:', err);
        res.status(500).json({ message: 'An error occurred while fetching inventory items.', error: err.message });
    }
});

module.exports = router;
