import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API } from "../utils/api";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { useFavorites } from "../context/FavoritesContext";

function getIngredients(meal: any) {
  const items: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`];
    if (ing && ing.trim()) items.push(`${ing}${meas ? ` - ${meas}` : ""}`);
  }
  return items;
}

export default function RecipeDetail() {
  const { recipeId = "" } = useParams();
  const { data, loading, error } = useFetch<{ meals: any[] }>(API.byId(recipeId));
  const { isFavorite, add, remove } = useFavorites();
  if (loading) return <Spinner />;
  if (error || !data || !data.meals?.[0]) return <ErrorMessage msg="Recipe not found." />;
  const meal = data.meals[0];
  const fav = isFavorite(meal.idMeal);
  return (
    <main style={{ padding: 12, display: "grid", gap: 16 }}>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: 480, width: "100%", borderRadius: 8 }} />
      <div>Category: {meal.strCategory} {meal.strArea ? `• ${meal.strArea}` : ""}</div>
      <button onClick={() => (fav ? remove(meal.idMeal) : add(meal.idMeal))}>
        {fav ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
      <section>
        <h3>Ingredients</h3>
        <ul>{getIngredients(meal).map((x, i) => <li key={i}>{x}</li>)}</ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{meal.strInstructions}</p>
      </section>
    </main>
  );
}