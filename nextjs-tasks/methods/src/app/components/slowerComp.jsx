import React from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const now = new Date().toLocaleTimeString();

const slowerComp = async () => {
  await delay(6000); // Simulate a 6-second delay
  return (
    <div>
      <h2>Slow Server Component</h2>
      <p>
        This content was delayed by 6 seconds, but thanks to streaming, the rest
        of the page appears earlier.
      </p>
      <p>
        <strong>Loaded at:</strong> {now}
      </p>
    </div>
  );
};

export default slowerComp;
