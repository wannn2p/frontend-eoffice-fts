// App.js
import React from "react";
import AppRoutes from "./routes/AppRoutes"; // Import AppRoutes
import "./styles/App.css";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
