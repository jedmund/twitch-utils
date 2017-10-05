import React, { Component } from 'react'
import Anime from 'react-anime'
import './LiveIndicator.sass'

class LiveIndicator extends Component {
    constructor() {
        super()
        this.state = {
            marginTop: 0
        }
    }
    render() {
        return (
            <Anime direction={'alternate'} opacity={[1.0, 0.0]} loop={true}>
                <div
                    className="LiveIndicator"
                    style={{ marginTop: this.state.marginTop }}
                />
            </Anime>
        )
    }
}

export default LiveIndicator
