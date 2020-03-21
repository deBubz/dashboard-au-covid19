import React from 'react'

export default class Tab extends React.Component {

    componentWillMount() {
        document.title = " Au Covid Dashboard | Tab";
        console.log(document.title);
    }
    render() {
        return <div>This worked</div>
    }
}