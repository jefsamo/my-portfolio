import { useEffect, useState } from "react";
import "./locationAndTime.css";

type TimeDay = "am" | "pm";

const LocationAndTime = () => {
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const timeOfDay: TimeDay = currentHour > 12 ? "pm" : "am";
  const addZeroToMinute =
    currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`;

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentHour(hours);
      setCurrentMinute(minutes);
    };
    const interval = setInterval(() => {
      getCurrentTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentMinute, currentHour]);

  return (
    <div className="location-time">
      <span>Lagos, NG</span>
      <span style={{ marginLeft: "15px" }}>
        {currentHour}:{addZeroToMinute}
        {timeOfDay}
      </span>
    </div>
  );
};

export default LocationAndTime;
