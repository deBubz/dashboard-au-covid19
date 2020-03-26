const Papa = require('papaparse');
const fs = require('fs');

// figure this out later
// const source = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv'

const dataPath = __dirname + '/data2.csv'
const data = fs.readFileSync(dataPath, "utf8");

// get data 
const dataRows = {}
Papa.parse( data , {
    // header: true,
    // preview: 4,
    transformHeader: true,
    complete: result => {
        dataRows.data = result.data;
        dataRows.error = result.errors;
        dataRows.meta = result.meta;
    }
})

// parse to array data
// cut first and last non-data part of the csv
const array = dataRows.data.slice(1, dataRows.data.length - 1).map( res => {
    const country = res[3];
    const state = res[2];
    const confirmed = res[7];
    const deaths = res[8];
    const recovered = res[9];
    return { country, state, confirmed, deaths, recovered }
})



module.exports = array;