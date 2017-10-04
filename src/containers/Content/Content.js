import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from 'components/Header/Header'
import ScheduleItem from 'components/ScheduleItem/ScheduleItem'
import LiveTray from "containers/LiveTray/LiveTray"
import Player from 'containers/Player/Player'
import moment from 'moment'
import './Content.css'

class Content extends Component {
    activities() {
        const scheduleData = [
            {
                "activity": "Designing comments",
                "datetime": "2017-10-02T20:00:00",
                "type"    : "Design",
                "active"  : false
            },
            {
                "activity": "Re-implementing Today feed",
                "datetime": "2017-10-02T22:00:00",
                "type"    : "Code",
                "active"  : false
            },
            {
                "activity": "Cuphead",
                "datetime": "2017-10-02T23:00:00",
                "type"    : "Game",
                "active"  : false
            },
            {
                "activity": "Blue Reflection",
                "datetime": "2017-10-03T00:30:00",
                "type"    : "Game",
                "active"  : false
            }
        ]

        return scheduleData
    }

    schedule() {
        const now = moment()
        const activities = this.activities()

        return activities.map((activity, i) => {
            const activityTime = moment(activity.datetime)
            const nextActivityTime = (i + 1 < activities.length) ? moment(activities[i + 1].datetime) : now.clone().add(6, 'hours')
            const isActive = now.isAfter(activityTime) && now.isBefore(nextActivityTime)
            return (
                <ScheduleItem
                    name={activity.activity}
                    datetime={activity.datetime}
                    type={activity.type}
                    active={isActive}
                    key={activity.activity}
                    ref={`activity-${i}`}
                />
            )
        })
    }

    sendPosition() {
        const activities = this.activities()
        activities.forEach((activity, i) => {
            const item = this.refs[`activity-${i}`]
            if (item.props.active) {
                const domNode = ReactDOM.findDOMNode(item)
                const boundingRect = domNode.getBoundingClientRect()
                this.refs['live-tray'].moveIndicator(boundingRect.top)
            }
        })
    }

    render() {
        return (
            <ul className="Content">
                <LiveTray ref='live-tray'/>
                <div className="wrapper">
                    <Header>Live soon.</Header>
                    <div className="schedule">
                        {this.schedule()}
                    </div>
                    <Player/>
                </div>
            </ul>
        );
    }

    componentDidMount() {
        this.sendPosition()
    }
}

export default Content
