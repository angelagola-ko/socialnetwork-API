const router = require('express').Router();
// Import all of the API routes from /api/index.js
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes importared from `api` directory
router.use('/api', apiRoutes);

router.use((req,res) => {
    res.status(400).send(<div><h1>OOf</h1><img src="../public/assets/images/404-error-meme.png"></img></div>)
})
