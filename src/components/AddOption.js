import React from 'react'

export default class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleFormSubmission(evt) {
        evt.preventDefault()
        const value = evt.target.elements.option.value.trim()
        const error = this.props.handleAddOption(value)
        this.setState( () => ( { error } ) )
        evt.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleFormSubmission}>
                    <input className="add-option__input" type='text' name='option'/>
                    <button className="button">Submit</button>
                </form>
            </div>
            

        )
    }
}