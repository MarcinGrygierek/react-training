import React, {Component, useState} from 'react';

// interface Props {}

// interface State {
//     name: string;
// }

// class StatefulComponent extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             name: 'Marcin'
//         }
//     }

//     render() {
//         const {name} = this.state;
//         return <h1>{name}</h1>
//     }
// }

const StatefulComponent = () => {
    const [name, setName] = useState<string>('Marcin');
    const [age, setAge] = useState<number>(27);
    return <h1>{name} ({age})</h1>
}

export default StatefulComponent;