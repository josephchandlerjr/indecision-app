console.log('app.js is running')

//JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Why make your own decisions?',
    options: []
}
const appRoot = document.getElementById('app')

const onFormSubmit = (evt) => {
    evt.preventDefault()
    const option = evt.target.elements.option.value
    if (option) {
        app.options.push(option)
    }
    evt.target.elements.option.value = ''
    renderApp()
}

const removeAll = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length > 0 ? false : true}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map( (opt) => <li key={opt}>{opt}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>bam</button>
            </form>
        </div>
    )  //parens for clarity only
    ReactDOM.render(template, appRoot)
}




renderApp()

