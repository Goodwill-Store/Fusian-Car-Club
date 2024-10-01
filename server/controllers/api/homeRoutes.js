const router = require('express').Router();

// Sample API route
router.get('/', (req, res) => {
    console.log("Tes home route")
    res.json([
      { id: 1, name: 'T-shirt', price: 20 },
      { id: 2, name: 'Hoodie', price: 50 },
    ]);
  });

module.exports = router;
