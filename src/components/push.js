import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export function Push() {
  const [lastNotificationTime, setLastNotificationTime] = useState(null);

  useEffect(() => {
    Notification.requestPermission();

    const checkTimeAndNotify = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/filtered_tweets_cancelled.csv');
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          quoteChar: '"',
          worker: true,
          complete: function(results) {
            const time = results.data[0]?.Date;
            const content = results.data[0]?.Content;
            setLastNotificationTime(time); // Update lastNotificationTime state
            if (time !== " 12:26 PM Feb 16 2024") {
              showNotification(content);
            }
          }
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
      }
    };

    // Check every minute (adjust the interval as needed)
    const intervalId = setInterval(checkTimeAndNotify, 5000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const showNotification = (content) => {
    new Notification('Bus Cancelled!', {
      body: content,
    });
  };

  return (
    <div>
      <h2>List of bus cancellations</h2>
    </div>
  );
}

export default Push;
