import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../types";

export const Recipes: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        /**
         * Dobrze jest tutaj srpawdzić czy data.recipes to jest na pewno tablica przepisów albo chociż że jest to tablica
         *
         * yup
         * zod
         * biblioteki do weryfikacji danych (kształtu danych)
         */
        if (Array.isArray(data.recipes)) {
          setRecipes(data.recipes);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <article style={{ display: "flex", gap: 20 }}>
        <input type="text" placeholder="Search by name" />
        <button style={{ width: "fit-content" }}>Reset</button>
      </article>
      <article>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Prep time (min)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.difficulty}</td>
                <td>{recipe.prepTimeMinutes}</td>
                <td>
                  <Link to={`/recipes/${recipe.id}`}>Ugotuj</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};
