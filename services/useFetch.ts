import { useEffect, useState } from "react";

export const useFetch = (fetchFunction: () => Promise<any>, autoFetch: boolean = true) => {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetchFunction();
            setData(data);
        } catch (error) {
            setError(error instanceof Error ? error : new Error('An error occurred'));
        } finally {
            setLoading(false);
        }
    };

    const reset = async () => {
        setData(null);
        setLoading(false);
        setError(null);
    };


    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
}