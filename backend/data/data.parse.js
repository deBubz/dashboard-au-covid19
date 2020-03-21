const Papa = require('papaparse');
const fs = require('fs');

// figgure this out later
// const source = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv'

const dataPath = __dirname + '/data.csv'
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
    const country = res[1];
    const state = res[0];
    const confirmed = res[3];
    const deaths = res[4];
    const recovered = res[5];
    return { country, state, confirmed, deaths, recovered }
})

function fun (arrayData) {
    var total = 0
    var australia = 0

    for (let index = 0; index < arrayData.length; index++) {
        const element = arrayData[index];

        if(element.country === 'Australia') { australia += Number(element.confirmed); }
        total += Number(element.confirmed);
    }
    return { total, australia };
}

// if (array.length > 2) {
//     console.log('data successfully parsed')
// }

module.exports = array;