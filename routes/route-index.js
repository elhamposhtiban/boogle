const path = require ("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);


router.get('/hello-world', (req, res) => {
  res.send('Hello world');
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"));
//   });

module.exports = router;