import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

type Props = { id: string; title: string; img: string };
export default function RecipeCard({ id, title, img }: Props) {
  const { isFavorite, add, remove } = useFavorites();
  const fav = isFavorite(id);
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden" }}>
      <img src={img} alt={title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
      <div style={{ padding: 8 }}>
        <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to={`/recipe/${id}`} style={{ textDecoration: "underline" }}>Details</Link>
          <button onClick={() => (fav ? remove(id) : add(id))}>
            {fav ? "★ Remove Favorite" : "☆ Add Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}