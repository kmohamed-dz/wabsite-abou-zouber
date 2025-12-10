import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <html lang="ar" dir="rtl">
      <body className="text-right antialiased">
        <App />
      </body>
    </html>
  </React.StrictMode>
);