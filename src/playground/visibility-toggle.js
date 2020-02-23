class VisibilityToggleApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this)
        this.state = {
            visible: false,
        }
    }
    handleToggleVisiblity() {
        this.setState( (prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (
        <div>
            <h1>{this.props.name}</h1>
            <button onClick={this.handleToggleVisiblity}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visible && <p>Here are some additional details</p>}
        </div>
        )
    }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<VisibilityToggleApp name='Visibility Toggle' />, appRoot)