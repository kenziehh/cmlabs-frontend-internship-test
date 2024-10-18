import MealCard from "@/components/MealCard";
import Link from "next/link";
const CategoryDetail = ({
  meals,
  categoryName,
}: {
  meals: Meal[];
  categoryName: Category["strCategory"];
}) => {
  return (
    <section className="min-h-screen bg-dark-80">
      <div className="container flex justify-center py-10 md:py-20 flex-col gap-10 md:gap-14">
        <Link href="/" className="text-white text-base md:text-2xl">{"< Back"}</Link>
        <h2 className="text-center text-white font-semibold text-3xl md:text-6xl">
          All Meals on {categoryName}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-10">
          {meals.map((meal) => {
            return <MealCard meal={meal} categoryName={categoryName} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;
