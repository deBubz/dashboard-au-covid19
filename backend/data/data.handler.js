// import from data parser
const dataArray = require('./data.parse');

// console.log(data);


// bunch of variables
let world_confirmed = 0, 
world_recovered = 0, 
world_death = 0;

for (let i = 0; i < dataArray.length; i++) {
    const element = dataArray[i];
    world_confirmed += Number(element.confirmed);
    world_death += Number(element.deaths);
    world_recovered += Number(element.recovered);
}




function all_data() { return dataArray; }
function world_stat() {
    return {
        w_confirmed: world_confirmed + '',
        w_recovered: world_recovered + '',
        w_deaths: world_death+ ''
    }
}

// console.log(all_data())
// console.log(world_stat())
// export
let dataHandler = {
    all_data: all_data(),
    world_data: world_stat(),
};

module.exports = dataHandler;

