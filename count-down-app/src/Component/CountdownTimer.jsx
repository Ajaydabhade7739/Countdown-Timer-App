

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const CountdownTimer = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const startCountdown = () => {
        setIsActive(true);
        setIsFinished(false);
    };

    const resetCountdown = () => {
        setIsActive(false);
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        setIsFinished(false);
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime.seconds > 0) {
                        return { ...prevTime, seconds: prevTime.seconds - 1 };
                    } else if (prevTime.minutes > 0) {
                        return { hours: prevTime.hours, minutes: prevTime.minutes - 1, seconds: 59 };
                    } else if (prevTime.hours > 0) {
                        return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                    } else {
                        setIsFinished(true);
                        clearInterval(interval);
                        return { hours: 0, minutes: 0, seconds: 0 };
                    }
                });
            }, 1000);
        } else if (!isActive && time.seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTime((prevTime) => ({
            ...prevTime,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-6">Countdown Timer</h1>
            <div className="flex space-x-2 mb-6">
                <input
                    type="number"
                    name="hours"
                    placeholder="HH"
                    value={time.hours}
                    onChange={handleChange}
                    className="w-24 p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
                    disabled={isActive}
                />
                <input
                    type="number"
                    name="minutes"
                    placeholder="MM"
                    value={time.minutes}
                    onChange={handleChange}
                    className="w-24 p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
                    disabled={isActive}
                />
                <input
                    type="number"
                    name="seconds"
                    placeholder="SS"
                    value={time.seconds}
                    onChange={handleChange}
                    className="w-24 p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
                    disabled={isActive}
                />
            </div>
            <div className={`text-6xl font-bold mb-6 ${isFinished ? "text-red-500" : "text-white"}`}>
                {isFinished
                    ? "Time's up!"
                    : `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`}
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={startCountdown}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    disabled={isActive || (time.hours === 0 && time.minutes === 0 && time.seconds === 0)}
                >
                    Start
                </button>
                <button
                    onClick={resetCountdown}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    disabled={!isActive}
                >
                    Reset
                </button>
            </div>
            <Link
                to="/"
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Home
            </Link>
        </div>
    );
};

export default CountdownTimer;
