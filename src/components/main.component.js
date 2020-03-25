import React from 'react';
import axios from 'axios';

const Data = props => (
    <tr>
        {/* <td>{props.d.country}</td>
        <td>{props.d.state}</td>
        <td>{props.d.w_confirmed}</td>
        <td>{props.d.w_recovered}</td>
        <td>{props.d.w_deaths}</td> */}
    </tr>
)


export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            world: {
                confirmed: 0,

            }
        }
    }

    componentDidMount() {
        document.title = "Au Covid Dashboard | List";
        axios.get('http://localhost:8080/total/')
          .then( res => {
            // console.log(res.data);
            this.setState({
                world: {
                    confirmed: res.data.w_confirmed,

                }
            })
          })
      }
    
    showData() {
        // return this.state.world.map(data => {
            console.log(this.state.world.confirmed)
            return <Data d={this.state.world}/>
        // })
    }
    
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-body'>
                    <h3 className='card-title'>Data</h3>
                    <table className="table">
                        <thead className='thead-light'>
                            <tr>
                                <th>Country</th>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Country</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showData()}
                        </tbody>
                    </table>
                    </div>
            </div>
            </div>
        );
    }
}