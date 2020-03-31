// let method = Country.prototype;
// model class for countries

// function Country(c_name, confirmed, recovered, deaths) {
//     this._country = c_name;
//     this._confirmed = confirmed;
//     this._recovered = recovered;
//     this._deaths = deaths;
// }

function Country(c_name, confirmed, recovered, deaths, c_state) {
    this._country = c_name;
    if(c_state !== 'undefined') this._state = c_state;
    this._confirmed = confirmed;
    this._recovered = recovered;
    this._deaths = deaths;
}


// function Total(country, confirmed, recovered, deaths) {
//    this._country =  
// }
// 
// function TotaCountry() extends Total 

module.exports = Country;
