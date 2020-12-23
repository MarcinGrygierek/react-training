import { Component, PureComponent } from "react";

interface Props {
    a: number;
    b: number;
}

// const ComponentPure = ({a, b}: Props) => {
//     if(Math.random() > 0.5) return <div>Test</div>
//     return <div>{a + b}</div>
// }

class ComponentPure extends PureComponent {
    render() {
        return <div>Test</div>
    }
}

export default ComponentPure;