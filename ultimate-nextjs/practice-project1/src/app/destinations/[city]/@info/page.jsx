"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { city } = useParams();
  return (
    <div className="text-white mt-[100px] w-[50%]">
      {city} is an amazing city with a lot to offer for travelers. Explore its
      unique culture, landmarks, and cuisine!
    </div>
  );
};

export default page;
