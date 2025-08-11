import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    nav(`/search?query=${encodeURIComponent(q)}`);
  };
  return (
    <header style={{ padding: 12, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid #eee" }}>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <form onSubmit={onSubmit} style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search recipes..." />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}