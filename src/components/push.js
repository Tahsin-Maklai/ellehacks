// import React, { useEffect } from 'react';
import Papa from 'papaparse';
import React, { useState } from 'react';


export function Push() {
    const [csvData, setCsvData] = useState([]);
    const [header, setHeader] = useState([]);
  useState(() => {
    Notification.requestPermission();

    const checkTimeAndNotify = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/filtered_tweets_cancelled.csv');
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          quoteChar: '"',
          complete: function(results) {
            setCsvData(results.data);
            setHeader(results.meta.fields);
            // Assuming the Date field is in the "Date" column
            const lastNotificationTime = setCsvData[0]?.Date;


              const currentTime = new Date();
              console.log(currentTime)
              const notificationTime = parseNotificationTime(lastNotificationTime);


              // Check if the time difference is within the last 5 minutes (300,000 milliseconds)
              if (currentTime - notificationTime <= 300000) {
                showNotification();
            
            }
          }
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
      }
    };

    // Check every minute (adjust the interval as needed)
    const intervalId = setInterval(checkTimeAndNotify, 60000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const parseNotificationTime = (dateString) => {
    // Parse the date string and return a Date object
    return new Date(dateString);
  };

  const showNotification = () => {
    new Notification('Sync Data', {
      body: 'Sync your data now!',
    });
  };

  return (
    <div>
      <p>This is a React component.</p>
    </div>
  );
}

export default Push;
