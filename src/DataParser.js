const Papa = require('papaparse');
const fs = require('fs');

const dataPath = './data.csv'
const source = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv'
const data = fs.readFileSync(dataPath, "utf8");

// get data 
const dataRows = {}
Papa.parse( data , {
    // header: true,
    transformHeader: true,
    // preview: 4,
    complete: result => {
        dataRows.data = result.data;
        dataRows.error = result.errors;
        dataRows.meta = result.meta;
    }
})

// parse to array data
const array = dataRows.data.slice(1, dataRows.data.length - 1).map( res => {
    const country = res[1];
    const state = res[0];
    const confirmed = res[3];
    const deaths = res[4];
    const recovered = res[5];
    // const  = res[3];
    return { country, state, confirmed, deaths, recovered }
})

// only australia and total data
// console.log(array)


function fun (arrayData) {
    var total = 0

    for (let index = 0; index < arrayData.length; index++) {
        const element = arrayData[index];
        total += Number(element.confirmed);
        console.log(element.confirmed + " " + total)
    }
    console.log(total)
}

fun(array)
// console.log(array[array.length -1])