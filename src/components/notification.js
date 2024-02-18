import React, { useEffect } from 'react';

export function Alert() {
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <div>
        <h1></h1>
    </div>
  );

  
}

export default Alert;