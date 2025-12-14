import React, { useEffect, useState } from 'react';
import { isDayTime } from '../utils/timeUtils';
import './TimeDisplay.module.css';

const TimeDisplay = ({ time, timezone }) => {
  const [formattedTime, setFormattedTime] = useState('');
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(time);
      
      let hour = '', minute = '', second = '', dayPeriod = '';
      parts.forEach(part => {
        switch(part.type) {
          case 'hour': hour = part.value; break;
          case 'minute': minute = part.value; break;
          case 'second': second = part.value; break;
          case 'dayPeriod': dayPeriod = part.value; break;
          default: break;
        }
      });
      
      setFormattedTime({ hour, minute, second, dayPeriod });
      setIsDay(isDayTime(time, timezone));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [time, timezone]);

  if (!formattedTime) return null;

  return (
    <div className={`time-display ${isDay ? 'day' : 'night'}`}>
      <div className="digital-clock">
        <div className="time-part hour">{formattedTime.hour}</div>
        <div className="time-separator">:</div>
        <div className="time-part minute">{formattedTime.minute}</div>
        <div className="time-separator">:</div>
        <div className="time-part second">{formattedTime.second}</div>
        <div className="time-period">{formattedTime.dayPeriod}</div>
      </div>
      <div className="time-zone">{timezone.replace(/_/g, ' ')}</div>
    </div>
  );
};

export default TimeDisplay;