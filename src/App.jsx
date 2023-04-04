import "./App.css";
import Hero from "./Compnets/Hero";
import Home from "./Compnets/Home";
import Login from "./Compnets/Login";
import Navbar from "./Compnets/Navbar";
import PrivateComp from "./Compnets/PrivateComp";
import Singup from "./Compnets/Singup";
import TaskList from "./Compnets/TaskList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/logout"
            element={<h1 className="text-red-700">logout </h1>}
          />

          <Route path="/singup" element={<Singup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
