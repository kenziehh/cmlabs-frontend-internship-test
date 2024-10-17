import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={category.strCategory}
      className="p-6 flex flex-col gap-2 bg-dark-80 hover:bg-dark-100 rounded-2xl"
      key={category.idCategory}
    >
      <Image
        alt=""
        width={80}
        height={80}
        src={category.strCategoryThumb}
        className="w-full rounded-2xl object-cover"
      />
      <h3 className="text-2xl text-center font-semibold text-white">
        {category.strCategory}
      </h3>
    </Link>
  );
};

export default CategoryCard;
