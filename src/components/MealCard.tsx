import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealCard = ({
  meal,
  categoryName,
}: {
  meal: Meal;
  categoryName: Category["strCategory"];
}) => {
  return (
    <Link
      key={meal.idMeal}
      href={`/${categoryName}/${meal.idMeal}`}
      className="text-center pb-6 bg-dark-60 rounded-2xl flex flex-col gap-5"
    >
      <Image
        src={meal.strMealThumb}
        width={80}
        height={80}
        alt=""
        className="w-full rounded-2xl"
      />
      <h4 className="line-clamp-3 text-base md;text-xl text-white font-semibold">
        {meal.strMeal}
      </h4>
    </Link>
  );
};

export default MealCard;
