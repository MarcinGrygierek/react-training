import React, {Component, useState} from 'react';

interface Props {
    defaultName: string;
}

// interface State {
//     name: string;
//     age: number;
// }

// class StatefulComponent extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             name: props.defaultName,
//             age: 190,
//         }
//     }

//     render() {
//         const {name, age} = this.state;
//         return <h1>{name} ({age})</h1>
//     }
// }

const StatefulComponent = ({defaultName}: Props) => {
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number>(27);
    return <h1>{name} ({age})</h1>
}

export default StatefulComponent;