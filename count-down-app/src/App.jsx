import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import CountdownTimer from "./Component/CountdownTimer";
import Stopwatch from "./Component/Stopwatch";
import Alarm from "./Component/Alarm";
import './index.css'; // Ensure Tailwind is imported here

function App() {
    return (
      <>
        <h1 className="text-blue-1000">Hello, Tailwind!</h1>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countdown" element={<CountdownTimer />} />
                <Route path="/stopwatch" element={<Stopwatch />} />
                <Route path="/alarm" element={<Alarm />} />
            </Routes>
        </Router>
      </>
    );
}

export default App;
