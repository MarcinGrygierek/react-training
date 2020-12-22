import React from 'react';

interface OptionalProps {
    name?: string
}

interface Props extends OptionalProps {
    text: string
    value: number
    object: {
        a: number
        b: number
    }
}

// const HelloProps = ({name, text, value, object}: Props) => {
//     return <>
//         {name}
//         <h1>{text}</h1>
//         {value * 10}
//         <p>
//             {object.a}
//         </p>
//         <p>        
//             {object.b}
//         </p>
//     </>
// }

// const defaultProps: OptionalProps = {
//     name: 'Domyślna wartość'
// }

// HelloProps.defaultProps = defaultProps;

class HelloProps extends React.Component<Props> {

    static defaultProps: OptionalProps = {
        name: 'Domyślna wartość'
    }

    render() {
    const {name, value, object, text}= this.props;
    return <>
             {name}
             <h1>{text}</h1>
             {value * 10}
             <p>
                {object.a}
             </p>
             <p>        
                {object.b}
             </p>
         </>
    }
}


export default HelloProps;