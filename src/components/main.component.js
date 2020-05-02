import React from 'react';
import axios from 'axios';
import List from './list.component'

// component
export default class Main extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            world: []
        }
    }

    componentDidMount() {
        document.title = "Au Covid Dashboard | Main";
        axios.get('http://localhost:8080/api/country')
            .then(res => {
                this.setState({
                    world: [...res.data],
                });
            });
    }
    
    render() {
        return (
            <div div className='card'>
                <List list={this.state.world} />
            </div>
        );
    }
}