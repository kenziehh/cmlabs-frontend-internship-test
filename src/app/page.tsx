import FoodCategories from "@/sections/home/FoodCategories";
import Hero from "@/sections/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FoodCategories />
    </main>
  );
}
