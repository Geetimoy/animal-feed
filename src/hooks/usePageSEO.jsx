import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

const usePageSEO = (seoPath) => {
  const [seo, setSeo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!seoPath) return;

    const fetchSEO = async () => {
      try {
        console.log("SEO URL:", `${API_URL}/seo/${seoPath}`);
        const res = await axios.get(
          `${API_URL}/seo/${seoPath}`
        );
        console.log("SEO Response:", res.data);

        setSeo(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSEO();
  }, [seoPath]);

  return { seo, loading };
};

export default usePageSEO;