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

router.route('/country').get((req, res) => {
    try {
        res.json(Data._parsedData);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.route('/total').get((req, res) => {
    try {
        res.json(Data._worldTotalData);
    } catch (error) {
        res.status(400).json('Error: ' +  error);
    }
});

router.route('/country/:country').get((req, res) => {
    try {
        let data = Data._countryData(req.params.country);
        if (data.lengh > 0) res.json(Data._countryData(req.params.country));
        else throw  req.params.country + " is an invalid Country";
    } catch (error) {
        res.status(400).json({Error:  error});
    }
});

router.route('/country/:country/total').get((req, res) => {
    res.json({
        country: req.params.country,
        total: 0,
    });
});

module.exports = router;