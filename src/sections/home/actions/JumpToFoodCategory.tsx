"use client";
import Button from "@/components/Button";
import React, { useState } from "react";

const JumpToFoodCategory = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleJumpToSection = () => {
    setIsScrolling(true);
    const targetSection = document.getElementById("all-categories");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 1000);
    } else {
      setIsScrolling(false);
    }
  };
  return (
    <Button size="large" variant="dark-80" onClick={handleJumpToSection}>
      Get Started
    </Button>
  );
};

export default JumpToFoodCategory;
