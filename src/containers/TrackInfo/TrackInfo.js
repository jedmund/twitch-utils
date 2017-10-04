import React, { Component } from 'react'
import './TrackInfo.css'

class TrackInfo extends Component {
    render() {
        return (
            <h3 className="TrackInfo">{this.props[this.props.trackAttribute]}</h3>
        );
    }
}

export default TrackInfo
