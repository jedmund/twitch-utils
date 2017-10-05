import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import 'moment-timezone'
import './ScheduleItem.sass'

class ScheduleItem extends Component {
    render() {
        return (
            <li className="ScheduleItem">
                <Moment className="ScheduleTime" format="HH:mm">
                    {this.props.datetime}
                </Moment>
                <div className="ScheduleType">{this.props.type}</div>
                <div className="ScheduleActivity">{this.props.name}</div>
            </li>
        )
    }
}

ScheduleItem.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    datetime: PropTypes.string
}

export default ScheduleItem
