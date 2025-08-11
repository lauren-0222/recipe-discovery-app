import { createContext, useContext } from "react";
import type { ReactNode } from "react";         
import { useLocalStorage } from "../hooks/useLocalStorage";

type Ctx = {
  favorites: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<Ctx | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);
  const add = (id: string) => setFavorites(prev => (prev.includes(id) ? prev : [...prev, id]));
  const remove = (id: string) => setFavorites(prev => prev.filter(x => x !== id));
  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, add, remove, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};