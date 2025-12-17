import { Suspense } from "react";
import SlowServerComponent from "../components/slowerComp";

export const metadata = {
  title: "Streaming Page",
};

export default function StreamingPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Streaming with React Suspense</h1>
      <p>
        The shell of the page is sent immediately, and the slow part is streamed
        when its ready.
      </p>

      <Suspense fallback={<p>Loading slow content from server...</p>}>
        {/* This will stream in later */}
        <SlowServerComponent />
      </Suspense>
    </main>
  );
}
