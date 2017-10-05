import React, { Component } from 'react'
import Content from 'containers/Content/Content'

import './Page.sass'

class Page extends Component {
    render() {
        return (
            <div className="Page">
                <Content />
            </div>
        )
    }
}

export default Page
