import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/settings`,
      );

      setSettings(response.data);
    } catch (error) {
      console.error("Settings API Error:", error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);