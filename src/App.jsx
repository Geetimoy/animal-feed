import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";
import { SettingsProvider } from "./context/SettingsContext";
import { AuthProvider } from "./auth/AuthProvider";
// import Core from "./components/Core";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/uidevelopment/animal-feed/">
      <AuthProvider>
        <CartProvider>
          <SettingsProvider>
            <HelmetProvider>
              {/* <Core /> */}
              <AppRoutes />
            </HelmetProvider>
          </SettingsProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;