import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { API } from "../utils/api";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";

type Meal = { idMeal: string; strMeal: string; strMealThumb: string };

export default function Favorites() {
  const { favorites } = useFavorites();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let canceled = false;
    async function load() {
      setLoading(true);
      const results: Meal[] = [];
      for (const id of favorites) {
        const r = await fetch(API.byId(id)).then(r => r.json());
        const m = r.meals?.[0];
        if (m && !canceled) results.push({ idMeal: m.idMeal, strMeal: m.strMeal, strMealThumb: m.strMealThumb });
      }
      if (!canceled) setMeals(results);
      setLoading(false);
    }
    load();
    return () => { canceled = true; };
  }, [favorites]);

  if (loading) return <Spinner />;
  if (favorites.length === 0) return <main style={{ padding: 12 }}>No favorites yet. Browse and add some!</main>;

  return (
    <main style={{ display: "grid", gap: 12, padding: 12, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
      {meals.map(m => <RecipeCard key={m.idMeal} id={m.idMeal} title={m.strMeal} img={m.strMealThumb} />)}
    </main>
  );
}