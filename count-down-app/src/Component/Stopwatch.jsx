// src/Components/Stopwatch.jsx

import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-6">Stopwatch</h1>
            <div className="text-6xl font-bold mb-6">
                {new Date(time).toISOString().slice(11, 19)}
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={() => setIsActive(!isActive)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    {isActive ? "Pause" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;

