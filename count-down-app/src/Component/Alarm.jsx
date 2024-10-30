import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Alarm = () => {
    const [alarmTime, setAlarmTime] = useState("");
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [isAlarmRinging, setIsAlarmRinging] = useState(false);
    const [alarmTimeout, setAlarmTimeout] = useState(null);

    const handleChange = (e) => {
        setAlarmTime(e.target.value);
    };

    const setAlarm = () => {
        if (alarmTime) {
            setIsAlarmSet(true);
            setIsAlarmRinging(false);

            if (alarmTimeout) clearTimeout(alarmTimeout);

            const [hours, minutes] = alarmTime.split(":").map(Number);
            const now = new Date();
            const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

            if (alarmDate <= now) {
                alarmDate.setDate(alarmDate.getDate() + 1);
            }

            const timeout = alarmDate.getTime() - now.getTime();
            const timeoutId = setTimeout(() => {
                setIsAlarmRinging(true);
                setIsAlarmSet(false);
            }, timeout);

            setAlarmTimeout(timeoutId);
        }
    };

    const resetAlarm = () => {
        setIsAlarmSet(false);
        setIsAlarmRinging(false);
        setAlarmTime("");
        if (alarmTimeout) clearTimeout(alarmTimeout);
    };

    useEffect(() => {
        return () => {
            if (alarmTimeout) clearTimeout(alarmTimeout);
        };
    }, [alarmTimeout]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
            <h1 className="text-5xl font-bold mb-6">Alarm</h1>
            <input
                type="time"
                value={alarmTime}
                onChange={handleChange}
                className="mb-4 p-2 rounded bg-gray-900 text-white"
                disabled={isAlarmRinging}
            />
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={setAlarm}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105"
                    disabled={isAlarmRinging}
                >
                    Set Alarm
                </button>
                <button
                    onClick={resetAlarm}
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:bg-red-700 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105"
                >
                    Reset
                </button>
            </div>
            {isAlarmRinging && <div className="text-6xl font-bold mt-6">🔔 Alarm Ringing!</div>}
            {isAlarmSet && <div className="text-lg mt-4">Alarm is set for {alarmTime}</div>}
            <Link
                to="/"
                className="mt-10 text-blue-400 hover:underline transition-transform transform hover:scale-110 text-lg"
            >
                Home
            </Link>
        </div>
    );
};

export default Alarm;
