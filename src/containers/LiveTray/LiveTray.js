import React, { Component } from 'react'
import LiveIndicator from 'components/LiveIndicator/LiveIndicator'
import './LiveTray.sass'

class LiveTray extends Component {
    moveIndicator(yPos) {
        console.log(`Got it! Moving by ${yPos}`)
        console.log(this.refs)
        this.refs['live-indicator'].setState({
            marginTop: `calc(${yPos}px - 48px - (100vh / 20) + (2rem / 2))`
        })
    }

    render() {
        return (
            <div className="LiveTray">
                <LiveIndicator ref="live-indicator" />
            </div>
        )
    }
}

export default LiveTray
