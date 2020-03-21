import React from 'react';
import axios from 'axios';

const Data = props => (
    <tr>
        <td>{props.d.country}</td>
        <td>{props.d.state}</td>
        <td>{props.d.confirmed}</td>
        <td>{props.d.recovered}</td>
        <td>{props.d.deaths}</td>
    </tr>
)


export default class ListComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            dataList: []
        }
    }

    componentDidMount() {
        document.title = "Au Covid Dashboard | List";
        axios.get('http://localhost:8080/data/')
          .then( res => {
            console.log(res.data);
            this.setState({
                dataList: res.data
            })
          })
      }
    
    showData() {
        return this.state.dataList.map(data => {
            return <Data d={data} key='0'/>
        })
    }
    
    render() {
        return (
            <div>
                <h3>Data</h3>
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
        );
    }
}