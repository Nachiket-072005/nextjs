import Counter from "@/app/components/counter";
import { getCounter } from "@/lib/counterStore";

export const dynamic = "force-dynamic"; // allow SSR on each request

export default async function Home() {
  const initialCounter = getCounter(); // SSR fetch

  return (
    <div style={{ padding: 20 }} className="text-center">
      <h1>Next.js Full-Stack Counter (App Router)</h1>
      <p>Server increments counter every 5 seconds.</p>

      <Counter initial={initialCounter} />
    </div>
  );
}
