import React from 'react'

export default class Tab extends React.Component {
    componentDidMount() {
        document.title = "Au Covid | Tab";
        console.log(document.title);
    }

    render() {
        return (
        <div>This is a Tab {this.props.name} </div>
        )
    }
}