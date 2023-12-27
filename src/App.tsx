import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import Home from "./components/Home.jsx";
import Test1 from "./components/Test1.js";

function App() {
  // const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        {/* <h1>{t("Welcome to React")}</h1>
      <h3>{t("name")}</h3> */}
        <Route path="/" element={<Home />} />
        <Route path="/test1" element={<Test1 />} />
      </Routes>
    </Router>
  );
}

export default App;
