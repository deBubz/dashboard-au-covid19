// import router
const router = require('express').Router();
import { _rawData, _parsedData, _worldTotalData } from './data.parse';

// all the data here should return as json object
router.route('/').get((req, res) => {
    res.json(_rawData);
});

router.route('/country').get((req, res) => {
    res.json(_parsedData);
});

router.route('/country/total').get((req, res) => {
    res.json(_worldTotalData);
});

export default router;