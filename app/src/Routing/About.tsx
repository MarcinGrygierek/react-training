import { useEffect } from "react";

const About = () =>{
    useEffect(() => {
        console.log('mount');
    }, []);
    return <h1>About</h1>
}

export default About;