import { useEffect, useState } from "react"

export function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    
    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(() => {
        fetch(url,{signal: abortCont.signal})
        .then(res=>{
            if (!res.ok){
                throw Error('Could not fetch the data for that ressource')
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false)
            setError(null)
        }).catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } 
            else{
                setIsLoading(false);
                setError(err.message);
            }      
        })
        }, 1000);
        return ()=> abortCont.abort();
    }, [url])
    return{data, isLoading, error}
}