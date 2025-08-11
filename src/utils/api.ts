export const API = {
  categories: "https://www.themealdb.com/api/json/v1/1/categories.php",
  byCategory: (c: string) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(c)}`,
  byId: (id: string) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`,
  search: (q: string) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q)}`,
};