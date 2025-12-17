// src/lib/counterStore.js
let counter = 0;
let started = false;

function startCounter() {
  if (started) return;
  started = true;

  setInterval(() => {
    counter += 1;
    console.log("[Server Counter]", counter);
  }, 5000);
}

export function getCounter() {
  startCounter();
  return counter;
}
