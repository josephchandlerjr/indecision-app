class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState( () => ( {options} ) )
            }
        } catch (e) {
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        if(prevState.options.length !== this.state.options.length){ //if options length changed
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOption(option) {
        this.setState( (prevState) =>  ({ options: prevState.options.filter( (op) => op !== option) }) )
    }
    handleDeleteOptions() {
        this.setState( () => ( {options: []} ))
    }
    handleAddOption(newOption) {
        if(!newOption) {
            return 'Enter valid value'
        } else if(this.state.options.indexOf(newOption) !== -1) {
            return 'Duplicate option entered';
        }

        this.setState((prevState) => ( {options: prevState.options.concat(newOption)} ) )
    }
    handlePick() {
        let randNum = Math.floor(Math.random() * this.state.options.length)
        alert(`It is decided! We have selected:\n${this.state.options[randNum]}`)
    }
    render() {
        const subtitle = 'Why make your own decisions?'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}/>
                <Options options={this.state.options} 
                         handleDeleteOptions={this.handleDeleteOptions} 
                         handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Option = (props) =>{
    return (
        <div> 
            {props.optionText}
            <button onClick={
                    () => props.handleDeleteOption(props.optionText)
                }>
                remove
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {!props.options.length > 0 && <p>No options currently available</p>}
            {
                props.options.map( (op) => <Option 
                                                key={op} 
                                                optionText={op} 
                                                handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    )
}

class AddOption extends React.Component {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmission}>
                    <input type='text' name='option'/>
                    <button>Submit</button>
                </form>
            </div>
            

        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))