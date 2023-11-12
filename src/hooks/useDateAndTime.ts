import { useEffect, useState } from "react";

export const useDateAndTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());

    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return { date: dateString, time: timeString };
}