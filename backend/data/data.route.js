// import router
const router = require('express').Router();
const Data = require('./data.parse')

// all the data here should return as json object

router.route('/').get((req, res) => {
    res.json(Data._rawData);
})

router.route('/country').get((req, res) => {
    res.json(Data._parsedData);
})

// console.log(Data._worldTotalData);
router.route('/country/total').get((req, res) => {
    res.json(Data._worldTotalData);
})

// router.route('/au/total').get((req, res) => {
//     res.json(auData.au_total_data);
// })


module.exports = router;