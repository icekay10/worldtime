const calculateTimeDifference = (date, timezone1, timezone2) => {
  const time1 = new Date(
    new Intl.DateTimeFormat('en-US', {
      timeZone: timezone1,
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).format(date)
  );
  
  const time2 = new Date(
    new Intl.DateTimeFormat('en-US', {
      timeZone: timezone2,
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).format(date)
  );
  
  const diffMinutes = (time1 - time2) / (1000 * 60);
  const absDiff = Math.abs(diffMinutes);
  const hours = Math.floor(absDiff / 60);
  const minutes = absDiff % 60;
  
  if (diffMinutes === 0) return 'Same time';
  
  const direction = diffMinutes > 0 ? 'ahead' : 'behind';
  
  if (hours === 0) {
    return `${minutes} min ${direction}`;
  } else if (minutes === 0) {
    return `${hours} hr${hours !== 1 ? 's' : ''} ${direction}`;
  } else {
    return `${hours} hr${hours !== 1 ? 's' : ''} ${minutes} min ${direction}`;
  }
};

export const isDayTime = (date, timezone) => {
  const hours = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    hour12: false
  }).format(date);
  
  return hours >= 6 && hours < 18;
};

export default calculateTimeDifference;