import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const CountdownTimer = () => {
    const [time, setTime] = useState({ hours: '', minutes: '', seconds: '' });
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const startCountdown = () => {
        setIsActive(true);
        setIsFinished(false);
    };

    const resetCountdown = () => {
        setIsActive(false);
        setTime({ hours: '', minutes: '', seconds: '' });
        setIsFinished(false);
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    const hours = parseInt(prevTime.hours) || 0;
                    const minutes = parseInt(prevTime.minutes) || 0;
                    const seconds = parseInt(prevTime.seconds) || 0;

                    if (seconds > 0) {
                        return { hours, minutes, seconds: seconds - 1 };
                    } else if (minutes > 0) {
                        return { hours, minutes: minutes - 1, seconds: 59 };
                    } else if (hours > 0) {
                        return { hours: hours - 1, minutes: 59, seconds: 59 };
                    } else {
                        setIsFinished(true);
                        clearInterval(interval);
                        return { hours: 0, minutes: 0, seconds: 0 };
                    }
                });
            }, 1000);
        } else if (!isActive && (time.seconds !== '' || time.minutes !== '' || time.hours !== '')) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        
        if (value === '') {
            setTime((prevTime) => ({
                ...prevTime,
                [name]: '', 
            }));
            return;
        }

        
        const numValue = Math.max(0, Math.min(value, 99));
        setTime((prevTime) => ({
            ...prevTime,
            [name]: numValue,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
              <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg">
                Welcome to Countdown 
            </h1>
            <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg">
                <span role="img" aria-label="timer" className="mr-2">⏳</span> Countdown Starts
            </h1>
            
            <div className="flex space-x-4 mb-8">
                <input
                    type="number"
                    name="hours"
                    placeholder="HH"
                    value={time.hours}
                    onChange={handleChange}
                    className="w-20 h-20 rounded-full bg-gray-900 border-4 border-purple-600 text-center text-2xl text-pink-500 shadow-lg outline-none focus:border-blue-400 focus:ring-4 focus:ring-pink-600"
                    disabled={isActive}
                />
                <input
                    type="number"
                    name="minutes"
                    placeholder="MM"
                    value={time.minutes}
                    onChange={handleChange}
                    className="w-20 h-20 rounded-full bg-gray-900 border-4 border-purple-600 text-center text-2xl text-pink-500 shadow-lg outline-none focus:border-blue-400 focus:ring-4 focus:ring-pink-600"
                    disabled={isActive}
                />
                <input
                    type="number"
                    name="seconds"
                    placeholder="SS"
                    value={time.seconds}
                    onChange={handleChange}
                    className="w-20 h-20 rounded-full bg-gray-900 border-4 border-purple-600 text-center text-2xl text-pink-500 shadow-lg outline-none focus:border-blue-400 focus:ring-4 focus:ring-pink-600"
                    disabled={isActive}
                />
            </div>

            <div className="text-6xl font-extrabold mb-10 text-center text-pink-400">
                {isFinished ? "Time's up!" : `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`}
            </div>

            <div className="flex space-x-8">
                <button
                    onClick={startCountdown}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-200"
                    disabled={isActive || (time.hours === '' && time.minutes === '' && time.seconds === '')}
                >
                    Start
                </button>
                <button
                    onClick={resetCountdown}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-200"
                    disabled={!isActive}
                >
                    Reset
                </button>
            </div>

            <Link
                to="/"
                className="mt-10 text-blue-400 hover:underline transition-transform transform hover:scale-110 text-lg"
            >
                Home
            </Link>
        </div>
    );
};

export default CountdownTimer;
