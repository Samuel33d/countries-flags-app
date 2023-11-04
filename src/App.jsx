import { Route, Routes } from "react-router-dom";
import "./App.css";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <main className={`${isDarkMode && "dark"} `}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Countries setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          }
        />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </main>
  );
}

export default App;
