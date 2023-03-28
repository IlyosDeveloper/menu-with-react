import { useState, useEffect } from "react";

function useFetch(url, category = null) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    try {
      setLoader(true);
      const request = await fetch(url);

      if (!request.ok) {
        throw new Error(request.statusText);
      }

      const data = await request.json();
      setLoader(false);
      if (category) {
        filterData(category, data.menu);
      } else {
        setData(data.menu);
      }
    } catch (err) {
      setError(err.message);
      setLoader(false);
    }
  };

  function filterData(category, items) {
    const filteredData = items.filter((item) => {
      return item.category === category;
    });
    setData(filteredData);
  }

  useEffect(() => {
    getData();
  }, [url, category]);

  return { data, error, loader };
}

export { useFetch };
