import React, { Component } from 'react'

export default class List extends Component {
    mapData(list) {
        return list.map(data => (
            <div className="col-sm-4">
            <div key={data._country} className="card mb-4" style={{width: 15 +'em'}}>
                
                <div className="card-body" >
                    <h5 className="card-header"> {data._country} </h5> <br/>
                    <ul className="">
                        <li><span style={{color: 'blue'}}> confirmed:</span> {data._confirmed}</li>                        
                        <li><span style={{color: 'red'}}> deaths:</span> {data._deaths}</li>
                        <li><span style={{color: 'green'}}> recovered:</span> {data._recovered}</li>
                    </ul>
                </div>
            </div>
            </div>
        ))
    }

    render() {
        return (
            <div className="container">
                <h3>Global List</h3>
                <div className="row">
                {   this.mapData(this.props.list)  }
                {/* { console.log(this.props.list) } */}
                </div>
            </div>
        )
    }
}
