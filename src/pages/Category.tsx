import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API } from "../utils/api";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/RecipeCard";

type Meal = { idMeal: string; strMeal: string; strMealThumb: string };

export default function Category() {
  const { categoryName = "" } = useParams();
  const { data, loading, error } = useFetch<{ meals: Meal[] }>(API.byCategory(categoryName));
  if (loading) return <Spinner />;
  if (error || !data) return <ErrorMessage />;
  return (
    <main style={{ display: "grid", gap: 12, padding: 12, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
      {data.meals?.map(m => (
        <RecipeCard key={m.idMeal} id={m.idMeal} title={m.strMeal} img={m.strMealThumb} />
      ))}
    </main>
  );
}