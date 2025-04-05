import { useState, useEffect } from "react";

// 4 - Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url);

            const json = await res.json();

            setData(json)
        };

        fetchData();
    }, [url]);

    return {data};
}