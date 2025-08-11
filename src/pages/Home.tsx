import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API } from "../utils/api";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

type Category = { idCategory: string; strCategory: string; strCategoryThumb: string };
export default function Home() {
  const { data, loading, error } = useFetch<{ categories: Category[] }>(API.categories);
  if (loading) return <Spinner />;
  if (error || !data) return <ErrorMessage />;
  return (
    <main className="grid" style={{ display: "grid", gap: 12, padding: 12, gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
      {data.categories.map(c => (
        <Link key={c.idCategory} to={`/category/${c.strCategory}`} style={{ textAlign: "center", border: "1px solid #ddd", borderRadius: 8, padding: 8 }}>
          <img src={c.strCategoryThumb} alt={c.strCategory} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6 }} />
          <div style={{ marginTop: 8, fontWeight: 600 }}>{c.strCategory}</div>
        </Link>
      ))}
    </main>
  );
}