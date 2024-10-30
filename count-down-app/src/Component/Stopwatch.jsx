import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
              <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg">
                Your Time Start Now
            </h1>
            <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg">
                <span role="img" aria-label="stopwatch" className="mr-2">⏱️</span> Stopwatch
            </h1>
            
            <div className="text-6xl font-extrabold mb-10">
                {new Date(time).toISOString().slice(11, 19)}
            </div>
            <div className="flex space-x-8 mb-8">
                <button
                    onClick={() => setIsActive(!isActive)}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-200"
                >
                    {isActive ? "Pause" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-200"
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

export default Stopwatch;
