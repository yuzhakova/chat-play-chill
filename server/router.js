const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => { //get-request to the root route and response
  res.send('server is up and running');
});

module.exports = router;