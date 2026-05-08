export const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ||
  "https://neonatestaging.com/animal_feed/public/api";
