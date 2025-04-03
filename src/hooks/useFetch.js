import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
