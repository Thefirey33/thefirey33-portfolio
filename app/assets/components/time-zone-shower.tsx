'use client';

import { useEffect, useState } from "react";

export const TimeZoneDisplay = () => {
    const [currentTime, setCurrentTime] = useState("Wait.");
    // The background becomes red when it indicates that Thefirey33 is probably offline. 
    const [offline, setOffline] = useState(false);

    useEffect(() => {
        const intvId = setInterval(() => {
            const currentDate = new Date();
            setCurrentTime(`${currentDate.toLocaleString("en-US", {
                timeZone: "Europe/Istanbul",
                timeStyle: "medium",
                hour12: false
            })}`);
            const currentHour = Number.parseInt(currentTime.substring(0, currentTime.indexOf(":")));
            setOffline(currentHour > 22 || currentHour < 8);
        }, 10);

        return () => clearInterval(intvId);
    }, [currentTime]);

    return (
        <div className={`grid grid-cols-${offline ? '2' : '1'} gap-4 w-full justify-center items-center`}>
            <p className="text-white text-center md:text-xl font-extrabold select-none">Time for meh: {currentTime}</p>
            {offline && <p className="text-white">I&apos;m probably offline!</p>}
        </div>
    );
}