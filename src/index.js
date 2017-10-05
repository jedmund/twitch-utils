import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './containers/App/App'

const appRoot = document.getElementById('.root')

function load() {
    ReactDOM.render(<App />, appRoot)
}

if (module.hot) {
    module.hot.accept('./containers/App/App', load)
}

load()
