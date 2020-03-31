let method = Country.prototype;
// model class for countries

function Country(c_name, c_state, confirmed, recovered, deaths) {
    this._country = c_name;
    this._state = c_state;
    this._confirmed = confirmed;
    this._recovered = recovered;
    this._deaths = deaths;
}

module.exports = Country;