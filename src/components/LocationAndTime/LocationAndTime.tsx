import "./locationAndTime.css";

const LocationAndTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeOfDay = hours > 12 ? "pm" : "am";
  const addZeroToMinute = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return (
    <div className="location-time">
      <span>Lagos, NG</span>
      <span style={{ marginLeft: "15px" }}>
        {hours}:{addZeroToMinute}
        {timeOfDay}
      </span>
    </div>
  );
};

export default LocationAndTime;
