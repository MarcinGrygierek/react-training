import { useEffect, useState } from "react";

const AsyncComponent = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<number>();
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(()=> {
        setLoading(true);
        const promise = new Promise<number>((resolve, reject) => {
            setTimeout(() =>{
                const val = Math.random() * 9 + 1;
                if(val > 5) resolve(val);
                else reject(val);
            }, 500);
        });

        const promise2 = new Promise<string>((resolve, reject) => {
            setTimeout(() =>{
                const val = Math.random() * 9 + 1;
                if(val > 5) resolve(val.toString());
                else reject(val.toString());
            }, 4000);
        });

        
        const promises: [Promise<number>, Promise<string>] = [promise, promise2];

        Promise.all(promises).then(data => {
            console.log(data);
            setLoading(false);
        }).catch((data: any[]) => {
            setIsError(true);
            console.log(data);
            setLoading(false);
        });

        // promise.then(data => {
        //     setResponse(data);
        //     setLoading(false);
        // }).catch((data: number) => {
        //     setIsError(true);
        //     setResponse(data);
        //     setLoading(false);
        // });

        console.log('Hello, I am after promise code');
    }, []);

    if(isLoading) return <p>Trwa ładowanie odpowiedzi</p>;
    if(isError) return <p>Wystąpił błąd</p>
    if(response) return <h1>Sukces! {response}</h1>
    return null;
}

export default AsyncComponent;