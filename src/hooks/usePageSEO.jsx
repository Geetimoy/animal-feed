import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

const usePageSEO = (slug) => {
  const [seo, setSeo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchSEO = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/seo/static/${slug}`
        );

        setSeo(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSEO();
  }, [slug]);

  return { seo, loading };
};

export default usePageSEO;