import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const axiosData = async () => {
      setLoading(true);
      try {
        const res = await axios(url);
        setData(res.data);
      } catch (error) {
        setData(null);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    axiosData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading };
};
