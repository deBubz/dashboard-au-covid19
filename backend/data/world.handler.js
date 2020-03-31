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


// console.log(all_data())

module.exports = dataHandler;
