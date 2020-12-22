import React, { useEffect, useState } from 'react'
import { setInterval } from 'timers';

interface Props {
    initValue: number;
}

const CounterComponent = ({initValue} : Props) => {
    const [counter, setCounter] = useState<number>(initValue);

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000)


        return () => {
            if (interval) {
                clearInterval(interval);
            }
            console.log('unmount');
        }
    }, [])

    useEffect(() => {
        if (counter % 5 === 0) {
            console.log("counter " + counter + " podzielny przez 5");
        }
    }, [counter]);

    return <>{counter}</>

}

export default CounterComponent