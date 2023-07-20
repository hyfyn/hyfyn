import { useEffect, useState } from "react";

const AgeCounter = () => {
  const wafflesdBday = new Date(2023, 1, 0).getTime();
  const [age, setAge] = useState<number>(Date.now() - wafflesdBday);
  const seconds = Math.floor(age / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  useEffect(() => {
    const interval = setInterval(() => setAge(Date.now() - wafflesdBday), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {`Waffles is approximately: ${months % 30} months, ${
        days - months * 30
      } days, ${hours % 24} hours, ${minutes % 60} minutes, and ${
        seconds % 60
      } seconds old`}
    </div>
  );
};

export default AgeCounter;
