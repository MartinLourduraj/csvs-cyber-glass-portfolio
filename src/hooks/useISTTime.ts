import { useState, useEffect } from 'react';

export function useISTTime() {
  const [timeStr, setTimeStr] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (Asia/Kolkata)
      const timeFormatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const dateFormatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });

      setTimeStr(timeFormatter.format(now));
      setDateStr(dateFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    time: timeStr || '00:00:00 AM',
    date: dateStr,
    timezone: 'IST (UTC+5:30)',
    location: 'Tamil Nadu, India',
    isOnline: true
  };
}
