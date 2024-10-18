import CategoryCard from "@/components/CategoryCard";
import { getAllFoodCategories } from "@/services/api/food";

const FoodCategories = async () => {
  const categories = (await getAllFoodCategories()) as Category[];
  return (
    <section
    id="all-categories"
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(247deg, #DEA03D -11.93%, #E4872A 30.53%, #81628C 61.74%, #5658A6 102.29%)",
      }}
    >
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-semibold text-white flex justify-center py-10 md:py-20">
          All Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-10">
          {categories.map((category) => {
            return (
              <CategoryCard category={category} key={category.idCategory} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
