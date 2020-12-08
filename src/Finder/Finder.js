import React, { Component } from 'react'; 
import './Finder.css';

class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <input
            onChange = {this.props.callback}
            name = "finder"
            id = "finder"
            placeholder = "Search..."
            />
        )
    }
}

export default Finder;