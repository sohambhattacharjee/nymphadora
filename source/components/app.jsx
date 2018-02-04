import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTpes from 'prop-types'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            loading: true
        }
    }
    render() {
        return (
            <div>TO-DO's</div>
        )
    }
}

export default App