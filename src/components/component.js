"use client"
import React from 'react'
export function Component({ delayedMessage }) {
  const [message, setMessage] = React.useState(null);

    // Resolve the promise and update the component's state
  React.useEffect(() => {

    delayedMessage.then((resolvedMessage) => {
      setMessage(resolvedMessage);
    });
  }, [delayedMessage]);

  return (
    <div>
      {message}
    </div>
  );
}
