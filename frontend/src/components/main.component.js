import React from 'react';
import axios from 'axios';
import List from './list.component'

// ---------------------------------------------------
// https://codepen.io/pjmtokyo/pen/ZGVjVV
// searching react
// ---------------------------------------------------

// component
export default class Main extends React.Component {
    constructor(props) {
        super (props);

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onKeydownSearch = this.onKeydownSearch.bind(this);

        this.state = {
            initialWorld: [],
            world: [],
            filtered: [],
            search: '',
        }
    }

    componentDidMount() {
        document.title = "Au Covid Dashboard | Main";
        axios.get('http://localhost:8080/api/country')
            .then(res => {
                this.setState({
                    initialWorld: [...res.data],
                    world: [...res.data],
                });
            });
    }

    onSearchChange(e) {
        // console.log(e.target.value);
        this.setState({ search: e.target.value });
        let searchString = e.target.value;
        let updated = this.state.initialWorld;
        updated = updated.filter( find => {
            // return find._country.toLowerCase().includes(searchString); });
            return find._country.toLowerCase().includes(searchString); });
        
        this.setState({ world: updated });
    }

    onKeydownSearch(e) {
        if (e.keyCode === 13) {

        }
    }

    
    render() {
        return (
            <div>
                <input 
                    type="text" className="form-control" 
                    placeholder="country" 
                    onChange={this.onSearchChange}
                    // onKeyDown={this.onSearchChange}
                    value={this.state.search}/> <br/>

                <div div className='card container'>
                    <List list={this.state.world} />
                    
                </div>
            </div>
        );
    }
}