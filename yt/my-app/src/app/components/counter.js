"use client";

import { useEffect, useState } from "react";

export default function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const fetchCounter = async () => {
      const res = await fetch("/api/counter");
      const data = await res.json();
      setCount(data.counter);
    };

    fetchCounter(); // first call
    const interval = setInterval(fetchCounter, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #ccc",
        display: "inline-block",
        borderRadius: 8,
      }}
    >
      <h3>Live Counter</h3>
      <div style={{ fontSize: 32 }}>{count}</div>
    </div>
  );
}
