import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Layout/Naviagtion";
import { Home } from "./pages/Home/Home";
import { Recipes } from "./pages/Recipes/Recipes";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";

export const App: FC = () => {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/about" element={<article>About</article>} />
        </Routes>
      </main>
    </>
  );
};
