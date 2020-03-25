// import from data parser
const dataArray = require('./data.parse');

// bunch of variables
let world_confirmed = 0, 
world_recovered = 0, 
world_death = 0;

for (let i = 0; i < dataArray.length; i++) {
    world_confirmed += Number(dataArray[i].confirmed);
    world_death += Number(dataArray[i].deaths);
    world_recovered += Number(dataArray[i].recovered);
}

function all_data() { return dataArray; }
function world_stat() {
    return {
        w_confirmed: world_confirmed,
        w_recovered: world_recovered,
        w_deaths: world_death
    }
}

// export
let dataHandler = {
    all_data: all_data(),
    world_stat: world_stat(),
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