import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config/api';

export const useBanner = (pageSlug) => {
    const [banner, setBanner] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!pageSlug) {
            setIsLoading(false);
            return;
        }

        const fetchBanner = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await axios.get(`${API_URL}/banners/${pageSlug}`);
                setBanner(res.data);
            } catch (err) {
                console.log("Banner API error:", err);
                setError(err.message || "Failed to fetch banner");
            } finally {
                setIsLoading(false);
            }
        };

        fetchBanner();
    }, [pageSlug]);

    return { banner, isLoading, error, bannerItem: banner?.data?.[0] };
};