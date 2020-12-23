import { useEffect, useState } from "react";

const AsyncAwaitComponent = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<number>();
    const [isError, setIsError] = useState<boolean>(false);

    const fetchData = (delay: number) => {
        const promise = new Promise<number>((resolve, reject) => {
            setTimeout(() =>{
                const val = Math.random() * 9 + 1;
                if(val > 5) resolve(val);
                else reject(val);
            }, delay);
        });
        return promise;
    }

    const getData = async() => {
        setLoading(true);
       
        try {
            const results = await Promise.all([fetchData(1000), fetchData(2000)]);
            console.log(results);
        } catch(e) {
            console.log(e);
        }
        
        try {
            const result = await fetchData(1000);
            console.log(result);
            const result2 = await fetchData(2000);
            console.log(result2);
            setResponse(result);
        } catch(e) {
            setIsError(true);
            console.log('Błąd!', e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        getData();
        console.log('Hello, I am after promise code');
    }, []);

    if(isLoading) return <p>Trwa ładowanie odpowiedzi</p>;
    if(isError) return <p>Wystąpił błąd</p>
    if(response) return <h1>Sukces! {response}</h1>
    return null;
}

export default AsyncAwaitComponent;