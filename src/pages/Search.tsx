import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API } from "../utils/api";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/RecipeCard";

type Meal = { idMeal: string; strMeal: string; strMealThumb: string };

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("query") || "";
  const { data, loading, error } = useFetch<{ meals: Meal[] | null }>(q ? API.search(q) : null);

  if (!q) return <main style={{ padding: 12 }}>Type something in the search bar.</main>;
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  if (!data?.meals) return <main style={{ padding: 12 }}>No results for “{q}”.</main>;

  return (
    <main style={{ display: "grid", gap: 12, padding: 12, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
      {data.meals.map(m => <RecipeCard key={m.idMeal} id={m.idMeal} title={m.strMeal} img={m.strMealThumb} />)}
    </main>
  );
}