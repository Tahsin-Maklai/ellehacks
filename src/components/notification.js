import React, { useEffect } from 'react';

export function Alert() {
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <div>
        <h1>Hello, React!</h1>
            <p>This is a React component.</p>
    </div>
  );

  
}

export default Alert;