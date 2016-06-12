import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { navigateTo } from '../actions'

let AddUrlForm = React.createClass({

    componentDidMount() {
        // Focus input element for user convenience
        this.refs.urlInput.focus()
    },

    render() {
        const submitForm = event => {
            event.preventDefault()
            let value = this.refs['urlInput'].value.trim()
            this.refs['urlInput'].value = ''
            if (value) {
                this.props.submitForm(value)
            }
        }
        return (
            <form className='add-url-form' onSubmit={submitForm}>
                <input ref='urlInput' type='text' placeholder='.....'></input>
            </form>
        )
    }
})


function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch, {canvasItemId}) {
    return bindActionCreators({
        submitForm: userInput => navigateTo({userInput, itemId: canvasItemId})
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUrlForm)
