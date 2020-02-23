class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.plusOne = this.plusOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
            const json = localStorage.getItem('count')
            console.log(json)
            const stringCount = JSON.parse(json)
            const count = parseInt(stringCount)
            if(!isNaN(count)){
                this.setState( () => ( {count} ) )
            } 
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log('saving')
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }
        
    } 
    plusOne(){
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    minusOne(){
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reset(){
        this.setState( () => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}


const appRoot = document.getElementById('app')
ReactDOM.render( <Counter />, appRoot)
