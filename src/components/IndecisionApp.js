import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],
            selectedOption: undefined
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
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
        let selectedOption = this.state.options[randNum]
        this.setState( () => ( { selectedOption  } ) ) 
        // alert(`It is decided! We have selected:\n${this.state.options[randNum]}`)
    }
    handleClearSelectedOption() {
        this.setState( () => ( {selectedOption: undefined} ) )
    }
    render() {
        const subtitle = 'Why make your own decisions?'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} 
                            handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options} 
                                handleDeleteOptions={this.handleDeleteOptions} 
                                handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
                </div>
                
            </div>
        )
    }
}
