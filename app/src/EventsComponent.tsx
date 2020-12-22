import { useState, Component } from "react"

// const EventsComponent = () => {
//     const [counter, setCounter] = useState(0);

//     const handleClick = () => {
//         setCounter(prevCounter => prevCounter + 1);
//     }

//     return <>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter(prev => prev + 1)}>click me</button>
//         <button onClick={handleClick}>click me</button>
//     </>
// }

interface State {
    counter: number;
}

class EventsComponent extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            counter: 0
        };
        // w przypadku kiedy nie używamy arrow function i chcemy zachować this
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prev => ({counter: prev.counter + 1}))
    }

    render() {
        const {counter} = this.state;
        return <>
        <h1>{counter}</h1>
        <button onClick={() => this.setState({counter: counter + 1})}>click me</button>
        <button onClick={this.handleClick}>click me</button>
    </>
    }
}

export default EventsComponent;