
function Country(c_name, confirmed, recovered, deaths, c_state) {
    this._country = c_name;
    if(c_state !== 'undefined') this._state = c_state;
    this._confirmed = confirmed;
    this._recovered = recovered;
    this._deaths = deaths;
}

module.exports = Country;
