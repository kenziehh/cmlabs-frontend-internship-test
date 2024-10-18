"use server";

import { BASE_URL } from "@/utils/env";
import axios from "axios";

export const getAllFoodCategories = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/1/categories.php`);
    return res.data.categories;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByCategoryName = async (name: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/1/filter.php?c=${name}`);
    return res.data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getMealById = async (id: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/1/lookup.php?i=${id}`);
    return res.data.meals[0];
  } catch (error) {
    console.log(error);
  }
};
