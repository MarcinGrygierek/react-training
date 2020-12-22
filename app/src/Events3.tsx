import React, {Component, MouseEvent} from 'react';


interface State {
    x: number, 
    y: number
}

class MouseBox extends Component<{}, State> {

    constructor({}) {
        super({});
        this.state = {x: 0, y:0};

    }

    render() {
        return <div onMouseMove={this.handleMouseMove}>
            <p style={{backgroundColor:'red'}}>mouse box</p>
        <p>x: {this.state.x}, y: {this.state.y}</p></div>
    }

    handleMouseMove = (e: MouseEvent) => {
        this.setState({x:e.screenX, y:e.screenY});
    }
}

export default MouseBox;
