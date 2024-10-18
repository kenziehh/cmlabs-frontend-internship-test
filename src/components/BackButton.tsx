"use client"
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="px-2 py-4 text-dark-100">
      {`< Back`}
    </button>
  );
};

export default BackButton;
