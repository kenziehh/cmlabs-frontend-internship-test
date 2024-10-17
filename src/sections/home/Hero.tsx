import Button from "@/components/Button";
import React from "react";
import JumpToFoodCategory from "./actions/JumpToFoodCategory";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-primary-80 to-primary-40">
      <div className="flex flex-col items-center gap-10 md:gap-16 container">
        <h1 className="text-5xl md:text-7xl font-bold text-black text-center">
          Explore All Foods Around The World
        </h1>
        <p className="max-w-md md:max-w-5xl text-base md:text-3xl text-center text-secondary-100">
          Foodies is your ultimate guide to discovering the world of cuisine.
          Explore a wide range of food categories, dive into detailed
          descriptions, and find delicious dishes that suit your taste.
        </p>
        <JumpToFoodCategory/>
      </div>
    </section>
  );
};

export default Hero;
