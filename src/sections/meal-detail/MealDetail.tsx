import BackButton from "@/components/BackButton";
import Image from "next/image";
import React from "react";

const MealDetail = ({ meal }: { meal: MealDetail }) => {
  const youtubeEmbedUrl = meal.strYoutube
    ? meal.strYoutube.replace("watch?v=", "embed/")
    : null;

  return (
    <section className="py-10 md:py-20 flex justify-center min-h-screen bg-gradient-to-b from-primary-40 to-secondary-80">
      <div className="w-full container grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-light-20 px-8 md:px-10 py-12">
        <div className="col-span-1 lg:col-span-2 top-1.5">
          <BackButton />
        </div>
        <Image
          alt=""
          src={meal.strMealThumb}
          width={200}
          height={200}
          className="object-cover w-full"
        />
        <div className="px-8 text-justify max-h-full overflow-auto flex-col flex">
          <h2 className="text-center text-black text-3xl font-semibold mt-6 md:mt-0">
            {meal.strMeal}
          </h2>
          <p className="text-black text-lg mt-4">{meal.strInstructions}</p>
          <div className="mt-6 text-black">
            <h3 className="text-black text-xl font-semibold">Ingredients</h3>
            <ul className="text-black mt-4">
              {Object.keys(meal)
                .filter(
                  (key) => key.includes("strIngredient") && (meal as any)[key]
                )
                .map((key) => (
                  <li key={key}>{(meal as any)[key]}</li>
                ))}
            </ul>
          </div>
        </div>
        {youtubeEmbedUrl? (
          <div className="col-span-1 lg:col-span-2 py-10 md:py-20">
            <iframe
              src={youtubeEmbedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="object-cover w-full h-[50vh] md:h-[80vh]"
            ></iframe>
          </div>
        ):<h4 className="text-center py-[10vh] md:py-[20vh] col-span-1 lg:col-span-2">No Youtube Video Provided</h4>}
      </div>
    </section>
  );
};

export default MealDetail;
