import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Wrapper from 'containers/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import ScheduleItem from 'components/ScheduleItem/ScheduleItem'
import LiveTray from "containers/LiveTray/LiveTray"
import moment from 'moment'
import './Schedule.css'

class Schedule extends Component {
    activities() {
        const scheduleData = [
            {
                "activity": "Designing comments",
                "datetime": "2017-10-01T23:00:00",
                "active"  : false
            },
            {
                "activity": "Re-implementing Today feed",
                "datetime": "2017-10-02T02:00:00",
                "active"  : false
            },
            {
                "activity": "Cuphead",
                "datetime": "2017-10-02T04:00:00",
                "active"  : false
            },
            {
                "activity": "Blue Reflection",
                "datetime": "2017-10-02T05:30:00",
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
            const nextActivityTime = (i + 1 < activities.length) ? moment(activities[i + 1].datetime) : now.add(6, 'hours')
            const isActive = now.isAfter(activityTime) && now.isBefore(nextActivityTime)
            return (
                <ScheduleItem
                    name={activity.activity}
                    datetime={activity.datetime}
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
            <ul className="Schedule">
                <LiveTray ref='live-tray'/>
                <Wrapper>
                    <Header>Live soon.</Header>
                    {this.schedule()}
                </Wrapper>
            </ul>
        );
    }

    componentDidMount() {
        this.sendPosition()
    }
}

export default Schedule
