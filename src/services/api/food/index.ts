"use server";

import { BASE_URL } from "@/utils/env";
import axios from "axios";

export const getAllFoodCategories = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/1/categories.php`);
    console.log(res)
    return res.data.categories;
  } catch (error) {
    console.log(error)
  }
};

export const getMealsByCategoryName = async (name: string) => {
    try {
        const res = await axios.get(`${BASE_URL}/1/filter.php?c=${name}`);
        return res.data.meals;
    } catch (error) {
        console.log(error)
    }
}