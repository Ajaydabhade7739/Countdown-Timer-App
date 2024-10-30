import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white mr-10">
            <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg">
                Welcome to the Timer App
            </h1>
            <div className="space-y-4">
                <Link
                    to="/countdown"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
                >
                    Countdown Timer
                </Link>
                
                <Link
                    to="/stopwatch"
                    className="bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
                >
                    Stopwatch
                </Link>
                
                <Link
                    to="/alarm"
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:bg-red-700 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
                >
                    Alarm
                </Link>
            </div>
        </div>
    );
};

export default Home;
