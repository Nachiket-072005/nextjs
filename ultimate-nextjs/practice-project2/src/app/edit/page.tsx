"use client";
import { set } from "mongoose";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";

const page = () => {
  const { data } = useSession();
  const [name, setName] = useState(data?.user?.name || "");
  const [frontendImage, setFrontendImage] = useState("");
  const [backendImage, setBackendImage] = useState<File>(null!);
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if(!files || files.length == 0) return;
    const file = files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file)); 
  };
  useEffect(() => {
    if (data) {
      setName((data.user?.name as string) || "");
      setFrontendImage((data.user?.image as string) || "");
    }
  }, [data]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Edit Profile
        </h1>
        <form className="space-y-2 flex flex-col items-center w-full">
          <div
            className="w-[100px] h-[100px] rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative"
            onClick={() => imageInput.current?.click()}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              ref={imageInput}
              onChange={handleImage}
            />

            {frontendImage ? (
              <Image src={frontendImage} fill alt="userImage" />
            ) : (
              <CgProfile size={22} color="white" />
            )}
          </div>
          <div className="w-full">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border-b border-white py-2 px-1 text-white outline-none bg-black placeholder-gray-400"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <button className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
