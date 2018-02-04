import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTpes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todos } = this.props
        return (
            <div className='application-wrapper'>
                <div>TO-DO's</div>
                <ul>
                    {
                        todos && todos.map((todo, index) => {
                            return (
                                <li key={index}>{todo.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return({todos: state.todos})
}

export default connect(mapStateToProps)(App)