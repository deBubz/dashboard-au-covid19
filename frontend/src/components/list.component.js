import React, { Component } from 'react'

export default class List extends Component {
    mapData(list) {
        return list.map(data => (
            <div key={data._country} className="card">{data._country}
                <ul>
                    <li>confirmed: {data._confirmed}</li>                        
                    <li>deaths: {data._deaths}</li>
                    <li>recovered: {data._recovered}</li>
                </ul>
            </div>
        ))
    }


    render() {
        return (
            <ul>
                <lab>Global List</lab>
                {   this.mapData(this.props.list)  }
            </ul>
        )
    }
}
