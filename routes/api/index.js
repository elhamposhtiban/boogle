const router = require("express").Router();
const bookRoutes = require("./book-api");

// Book routes
router.use("/book", bookRoutes);

module.exports = router;