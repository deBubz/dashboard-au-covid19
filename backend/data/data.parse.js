const Papa = require('papaparse');
const fs = require('fs');
const Country = require('./Country.model');

// read from the csv file
// export the data as a class array

// figure this out later
// const source = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv'

const dataPath = __dirname + '/data3.csv';
const data = fs.readFileSync(dataPath, "utf8");

// get data 
    const dataRows = {};
Papa.parse( data , {
    // header: true,
    // preview: 4,
    transformHeader: true,
    complete: (result) => {
        dataRows.data = result.data;
        dataRows.error = result.errors;
        dataRows.meta = result.meta;
    }
})

// raw data parsed from the csv
// cut first and last non-data part of the csv
const rawData = dataRows.data.slice(1, dataRows.data.length - 1)
    .map(res => new Country(res[3], res[7], res[9], res[8], res[2]));

    // lets modify that array
function unique(arr) {
    return arr
        .map((e) => e['_country'])
        .filter((elem , item , array) => item === array.indexOf(elem));
    }
    
// each country totals
let parsedData = [];
var uniqueCountries = unique(rawData);
uniqueCountries.forEach((element) => {
    let conf = 0,
        rec = 0,
        d = 0;
    rawData.forEach((country) => {
        if(element === country._country){
            conf += Number(country._confirmed);
            rec += Number(country._recovered);
            d += Number(country._deaths);
        }
    })
    parsedData.push(new Country(element, conf, rec, d));
});

// world totals
let worldData = {
    _totalConfirmed: 0,
    _totalRecovered: 0,
    _totalDeaths: 0,
}

rawData.forEach(elem => {
    worldData._totalConfirmed += Number(elem._confirmed);
    worldData._totalRecovered += Number(elem._recovered);
    worldData._totalDeaths += Number(elem._deaths);
});

// get states data of country
let CountryData = (country) => {
    let cData = [];
    rawData.forEach(elem => {
        if(elem._country.toLowerCase() === country.toLowerCase()) 
            cData.push(elem);})
    return cData;
}

// total data of a single country
function TotalCountryData(country) {
    let found;
    parsedData.every((elem) => {
        if(elem._country.toLowerCase() === country) {
            found = elem;
            return false;
        } else return true;
    });

    return found;
}

// export this data
module.exports = {
    _rawData: rawData,
    _parsedData: parsedData,
    _worldTotalData: worldData,
    _countryData: (country) => CountryData(country),
    _countryTotalData: (name) => TotalCountryData(name)
};