"use client";
import { useEffect } from "react";

export default function Home() {
  // SSR - Server Side Rendering
  // const response = await fetch("http://localhost:3000/api/user", {
  //   cache: "no-store",
  // });
  // const data = await response.json();

  // SSG - Static Site Generation
  // const response = await fetch("http://localhost:3000/api/user", {
  //   cache: "force-cache",
  // });
  // const data = await response.json();

  // ISR - Incremental Static Regeneration
  // const response = await fetch("http://localhost:3000/api/user", {
  //   next: { revalidate: 10 },
  // });
  // const data = await response.json();

  // CSR - Client Side Rendering
  const handleApi = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    alert(`${data.name} - ${data.age}`);
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div>
      <button
        onClick={handleApi}
        className="border-white p-2 m-2 bg-blue-500 text-white"
      >
        Fetch User Data
      </button>
    </div>
  );
}
