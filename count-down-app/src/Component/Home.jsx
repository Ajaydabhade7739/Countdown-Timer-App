// src/Components/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex-row items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white ">
            <h1 className="text-5xl font-bold mb-8">Welcome to the Timer App</h1>
            <div className="">
            <div className="space-y-4 ">
                <div className="space-x-25 ">
                <Link
                    to="/countdown"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Countdown Timer
                </Link>
                </div>
                <Link
                    to="/stopwatch"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Stopwatch
                </Link>
                <Link
                    to="/alarm"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Alarm
                </Link>
               
            </div>
            </div>
        </div>
    );
};

export default Home;
