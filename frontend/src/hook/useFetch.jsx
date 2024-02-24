import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        try {
            axios.get(url)
                .then(res => setData(res.data))
                .catch(err => setError(err))
        }
        catch {
            console.log('hato');
        }
    }, [])
    
    return [data, error]
}

export default useFetch
