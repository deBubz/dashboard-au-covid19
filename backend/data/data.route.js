// import router
const router = require('express').Router();
const dataHandler = require('./data.handler')

// all the data here should return as json object

router.route('/').get((req, res) => {
    res.json(dataHandler.all_data).send();
})

router.route('/world').get((req, res) => {
    res.json(dataHandler.world_data).end();
})

// router.route('/au').get((req, res) => {

// })


module.exports = router;