import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Core from './components/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';

import { CartProvider } from "./context/CartContext";
import { SettingsProvider } from "./context/SettingsContext";

import { HelmetProvider } from "react-helmet-async";

// import AppRoutes from "./routes/AppRoutes";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>  
        <SettingsProvider>
          <HelmetProvider>
            <Core />
          </HelmetProvider>
        </SettingsProvider>
      </CartProvider> 
    </>
  );
}

export default App
