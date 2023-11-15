"use client";
import React from "react";

export default function Page() {
  const [count, setCount] = React.useState(0);

  const fetchCounter = async () => {
    const res = await fetch("/api/counter");
    const data = await res.json();
    setCount(data.value);
  };

  React.useEffect(() => {
    // Fetch the current value of the counter on component mount
    fetchCounter();

    // Fetch the counter value every second to keep it updated
    const intervalId = setInterval(fetchCounter, 1000);

    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current value: {count}</p>
    </div>
  );
}
