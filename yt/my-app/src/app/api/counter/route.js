// src/app/api/counter/route.js
import { getCounter } from "@/lib/counterStore";

export async function GET() {
  const value = getCounter();
  return Response.json({ counter: value });
}
