import React, { Component } from 'react'
import Schedule from 'containers/Schedule/Schedule'

import './Page.css'

class Page extends Component {
    render() {
        return (
            <div className="Page">
                <Schedule/>
            </div>
        );
    }
}

export default Page;
