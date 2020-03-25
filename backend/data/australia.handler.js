// import from data parser
const dataArray = require('./data.parse');

// bunch of variables
let au_total_confirmed = 0, 
au_total_recovered = 0, 
au_total_death = 0;
let auArray = [];

for (let i = 0; i < dataArray.length; i++) {
    if(dataArray[i].country === 'Australia' ) {
        au_total_confirmed += Number(dataArray[i].confirmed);
        au_total_death += Number(dataArray[i].deaths);
        au_total_recovered += Number(dataArray[i].recovered);
        auArray.push(dataArray[i]);
    }
}

function get_au_data() { return auArray; }
function au_total_stat() {
    return {
        w_confirmed: au_total_confirmed,
        w_recovered: au_total_recovered,
        w_deaths: au_total_death
    }
}

// export
let dataHandler = {
    au_data: get_au_data(),
    au_total_data: au_total_stat(),
};

module.exports = dataHandler;

// function fun (arrayData) {
//     var total = 0
//     var australia = 0

//     for (let index = 0; index < arrayData.length; index++) {
//         const element = arrayData[index];

//         if(element.country === 'Australia') { australia += Number(element.confirmed); }
//         total += Number(element.confirmed);
//     }
//     return { total, australia };
// }