import React from 'react';
import axios from 'axios';

// const Data = props => (
//     <ul>
//         <li>Confirmed: {props.d.confirmed}</li>
//         <li>Recovered: {props.d.recovered}</li>
//         <li>Deaths: {props.d.deaths}</li>
//     </ul>
// )

export default class Main extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            world: {
                confirmed: 0,
                deaths: 0,
                recovered: 0,
            }
        }
    }

    componentWillMount() {
        document.title = "Au Covid Dashboard | Main";
        axios.get('http://localhost:8080/total')
            .then(res => {
                this.setState({
                    world: {
                        confirmed: res.data.w_confirmed,
                        recovered: res.data.w_recovered,
                        deaths: res.data.w_deaths,
                    }
                });
            })
    }

    showData() {
        console.log(this.state.world.confirmed);
        return (
            // <Data d={this.state.world}/>
            <ul>
                <li>Confirmed: {this.state.world.confirmed}</li>
                <li>Recovered: {this.state.world.recovered}</li>
                <li>Deaths:    {this.state.world.deaths}</li>
            </ul>
        )
    }
    
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>Data</h3>
                            <div> {this.showData()} </div>
                    </div>
                </div>
            </div>
        );
    }
}