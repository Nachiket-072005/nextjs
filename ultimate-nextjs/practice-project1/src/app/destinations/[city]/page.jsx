import React from "react";
import parisImg from "@/assets/paris.jpg";
import newyorkImg from "@/assets/newyork.jpg";
import tokyoImg from "@/assets/tokyo.jpg";
import Image from "next/image";

const page = async ({ params }) => {
  const { city } = await params;
  console.log(city);
  return (
    <div className="text-white mt-[100px] w-[50%]">
      {city} is the beautiful city.
      {city == "Paris" && (
        <Image src={parisImg} alt="Paris Image" width={400} height={400} />
      )}
      {city == "NewYork" && (
        <Image src={newyorkImg} alt="New York Image" width={400} height={400} />
      )}
      {city == "Tokyo" && (
        <Image src={tokyoImg} alt="Tokyo Image" width={400} height={400} />
      )}
    </div>
  );
};

export default page;
