// import router
const router = require('express').Router();
const Data = require('./data.parse');
const CountryData = require('./data.parse')

// all the data here should return as json object

router.route('/').get((req, res) => {
    try {
        res.json(Data._rawData);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

// world total
router.route('/country').get((req, res) => {
    try {
        res.json(Data._parsedData);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

// total world
router.route('/total').get((req, res) => {
    try {
        res.json(Data._worldTotalData);
    } catch (error) {
        res.status(400).json('Error: ' +  error);
    }
});

// query country and their state numbers
router.route('/country/:country').get((req, res) => {
    try {
        let cData = Data._countryData(req.params.country);
        // console.log(cData);
        if (cData.length > 0) res.json(cData);
        else throw  req.params.country + " is an invalid Country";
    } catch (error) {
        res.status(400).json({Error:  error});
    }
});

// total of country
router.route('/country/:country/total').get((req, res) => {
    try {
        let cData = Data._countryTotalData(req.params.country);
        res.json(cData);
    } catch (error) {
        res.status(400).json({Error: error});
    }
});

module.exports = router;