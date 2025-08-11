# Recipe Discovery App
Your site is live at https://lauren-0222.github.io/recipe-discovery-app/

## Description
The **Recipe Discovery App** is a React + TypeScript single-page application that uses the [TheMealDB API](https://www.themealdb.com/) to allow users to explore and save recipes.  
The application includes:
- Browsing recipes by category.
- Searching recipes by name.
- Viewing full recipe details, including ingredients and instructions.
- Adding/removing favorite recipes with persistent storage via `localStorage`.
- Navigation between pages using **React Router**.

---

## Features Implemented
- **Dynamic Routing** for categories, recipes, search, and favorites.
- **Custom Hooks**:
  - `useFetch` – reusable API data fetching with loading/error states.
  - `useLocalStorage` – synchronizes state with the browser’s `localStorage`.
- **Global Favorites Context** using the Context API.
- **Reusable UI Components**: `Navbar`, `RecipeCard`, `Spinner`, `ErrorMessage`.
- **Responsive Layout** using basic CSS grid.

---

## Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-discovery-app.git
   cd recipe-discovery-app
   ```
2. **Install Dependencies**<br>
```npm install```
3. **Install Routing Dependencies**
``` npm install react-router-dom
npm install --save-dev @types/react-router-dom 
```
4. **Run the development server**<br>
``` npm run dev ```
5. **Open in your browser**<br>
Vite will display the local URL (e.g. ```http:/localhost:513```)

