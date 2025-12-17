import { getCounter } from "@/lib/counterStore";

export const revalidate = 5; // ISR every 5 seconds

export default async function ISRPage() {
  const snapshot = getCounter();

  return (
    <div style={{ padding: 20 }}>
      <h1>ISR Page (Revalidates every 5s)</h1>
      <p>Static snapshot of the counter:</p>
      <h2>{snapshot}</h2>
    </div>
  );
}
