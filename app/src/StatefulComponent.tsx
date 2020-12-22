import React, {Component, useEffect, useState} from 'react';

interface Props {
    defaultName: string;
}

// interface State {
//     name: string;
//     age: number;
//     counter: number;
// }

// class StatefulComponent extends Component<Props, State> {
//     private interval: NodeJS.Timeout | null = null;

//     constructor(props: Props) {
//         super(props);
//         console.log('Constructor');
//         this.state = {
//             name: props.defaultName,
//             age: 190,
//             counter: 0
//         }
//     }

//     componentDidMount() {
//         console.log('mount');
//         this.interval = setInterval(() => {
//             // this.setState({
//             //    counter: this.state.counter + 1 
//             // });
//             // drugi parametr w setState to funkcja zwrotna
//             // która wywołuje się natychmiast po aktualizacji stanu
//             // przydatna z tego powodu że setState zachodzi asynchronicznie
//             // i bezpośednio pod tą instrukcją możemy nie mieć jeszcze aktualnego stanu
//             this.setState(prevState => ({
//                 counter: prevState.counter + 1
//             }), () => {
//                 if(this.state.counter === 10) {
//                     if(this.interval) clearInterval(this.interval);
//                 }
//             }); 
//         }, 1000);
//     }

//     componentDidUpdate(prevProps: Props, prevState: State) {
//         console.log('update');
//     }

//     shouldComponentUpdate(nextProps: Props, nextState: State) {
//         // return false; // w przypadku kiedy chcemy zablokować rerender
//         return true;
//     }

//     componentWillUnmount() {
//         console.log('unmount');
//         if(this.interval) clearInterval(this.interval);
//     }

//     render() {
//         console.log('render');
//         const {name, age, counter} = this.state;
//         return <h1>{name} ({age}) - { counter }</h1>
//     }
// }

const StatefulComponent = ({defaultName}: Props) => {
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number>(27);
    const [counter, setCounter] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>();

    useEffect(() => {
        console.log('mount');

        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000)

       setIntervalId(interval);
        
        return () => {
            if(intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
            console.log('unmount')
        }
    }, [])

    useEffect(() => {
        if(counter === 10) {
            if(intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }
    }, [counter]);

    useEffect(() => {
        console.log('name updated');
    }, [name])

    useEffect(() => {
        console.log('age or name updated');
    }, [age, name])

    console.log('render');
    return <h1>{name} ({age}) - {counter}</h1>
}

export default StatefulComponent;