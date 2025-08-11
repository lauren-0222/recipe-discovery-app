##  Most Challenging Part
The most challenging part of the project was getting the favorites feature to be both **global** and **persistent**.  
I solved this by:

- Creating a `FavoritesContext` that stores the list of favorite recipe IDs.
- Using the custom `useLocalStorage` hook inside the context to ensure favorites are saved and restored even after a page refresh.
- Making `add`, `remove`, and `isFavorite` functions available anywhere in the app without prop drilling.

This required careful planning of **state scope** and ensuring the UI updates immediately when favorites change.

---

##  Key Design Decision
I made the decision to structure `useFetch` as a **generic** hook that accepts any API URL and returns:

- `data`
- `loading`
- `error`

This allowed me to use the exact same hook for:

- Fetching all categories.
- Fetching recipes in a category.
- Fetching a recipe by ID.
- Performing search queries.

The benefit of this approach is **maintainability**—if I need to change how API requests work, I only edit one file.

---

##  What I Learned
- How to integrate **React Router** for dynamic routes.
- How to use **Context API** for global state management.
- How to persist state using `localStorage`.
- The importance of **type-only imports** when `verbatimModuleSyntax` is enabled in TypeScript.
- How to fix module resolution issues by ensuring correct file paths and imports.
