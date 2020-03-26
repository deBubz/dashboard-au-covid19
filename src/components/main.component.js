import React from 'react';
import axios from 'axios';

// const Data = props => (
//     <tr>
//         {/* <td>{props.d.country}</td>
//         <td>{props.d.state}</td>
//         <td>{props.d.w_confirmed}</td>
//         <td>{props.d.w_recovered}</td>
//         <td>{props.d.w_deaths}</td> */}
//     </tr>
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

    componentDidMount() {
        document.title = "Au Covid Dashboard | Main";
        axios.get('http://localhost:8080/total')
            .then(res => {
                this.setState({
                    confirmed: res.data.w_confirmed,
                    recovered: res.data.w_recovered,
                    deaths: res.data.w_deaths,
                });
                console.log(res)
                console.log(res.data.w_confirmed)
            })
    }

    showData() {
        console.log(this.state.world.confirmed);
        return (
            <ul>
                <li>Confirmed: {this.state.world.confirmed}</li>
                <li>Recovered: {this.state.world.recovered}</li>
                <li>Deaths: {this.state.world.deaths}</li>
            </ul>
            
        )
    }
    // showData() {
    //     // return this.state.world.map(data => {
    //         console.log(this.state.world.confirmed)
    //         return <Data d={this.state.world}/>
    //     // })
    // }

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