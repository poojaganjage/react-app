import {useState, useEffect, useDebugValue} from "react";

export default function useFetchAPI(url = "", options = null) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(url, options).then((res) => {
            return res.json()}).then((data) => {
            setData(data);
            setError(null);
        }).catch((error) => {
            setError(error);
            setData(null);
        }).finally(() => {
            setLoading(false);
        });
        console.log(data);
    }, [url, options]);

    useDebugValue("API FETCHER!");

    return {
        data, error, loading
    };
}