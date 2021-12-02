import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Couzdetails from "./components/Couzdetails";
import Couzbirthday from "./components/Couzbirthday";
import Error from "./components/Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/couzdetails" element={<Couzdetails />} />
        <Route path="/couzbirthday" element={<Couzbirthday />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
