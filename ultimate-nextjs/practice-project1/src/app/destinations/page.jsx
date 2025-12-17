'use client'

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const destinations = ["Paris", "NewYork", "Tokyo"];
  const router = useRouter()
  return (
    <div className="flex justify-center items-center text-white h-full flex-col gap-4">
      <div className="font-bold text-2xl">Choose Your Destination</div>
      <div className="flex flex-col gap-4">
        {destinations.map((destination, i) => (
          <div
            key={i}
            className="text-black font-bold text-2xl flex items-center justify-center rounded-2xl w-[200px] h-[100px] bg-white hover:scale-105 hover:cursor-pointer transition-transform"
            onClick={() => router.push(`/destinations/${destination}`)}
          >
            {destination}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
