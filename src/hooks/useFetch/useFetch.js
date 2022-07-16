/* eslint-disable prettier/prettier */
import {useState,useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
           const {data: responseData} = await axios.get(url);
       setData(responseData);
       setLoading(false);
        } catch (err) {

            setLoading(false);
            setError(true);
        }

    };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading,data,error};
}

export default useFetch;
