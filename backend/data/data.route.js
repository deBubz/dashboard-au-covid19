// import router
const router = require('express').Router();
const worldData = require('./world.handler');
const auData = require('./australia.handler');

// all the data here should return as json object

router.route('/').get((req, res) => {
    res.json(worldData.all_data)
})

router.route('/total').get((req, res) => {
    res.json(worldData.world_stat);
})

router.route('/au').get((req, res) => {
    res.json(auData.au_data);
})

router.route('/au/total').get((req, res) => {
    res.json(auData.au_total_data);
})


module.exports = router;