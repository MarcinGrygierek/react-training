import { useEffect, useState } from "react"

interface Response {
   
}

const ApiComponent = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState();
    const [isError, setIsError] = useState<boolean>(false);

    const fetchData = async() => {
        try {
            const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
        } catch(e) {
            console.log('error', e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return null;
}

export default ApiComponent;