// import router
const router = require('express').Router();
const data = require('./data.parse')

// all the data here should return as json object

router.route('/').get((req, res) => {
    res.json(data).send();
})

module.exports = router;