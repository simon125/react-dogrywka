import { FC, useContext, useEffect, useState } from "react";
import { Recipe } from "../../../types";
import { TableRow } from "./TableRow";
import { RecipeSearchContext } from "../../../contexts/RecipeSearchContext";

export const Table: FC = () => {
  const { searchPhrase } = useContext(RecipeSearchContext);
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

  const recipesToDisplay =
    searchPhrase.length === 0
      ? recipes
      : recipes.filter((recipe) =>
          recipe.name
            .toLocaleLowerCase()
            .match(searchPhrase.toLocaleLowerCase())
        );

  return (
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
          {recipesToDisplay.map((recipe) => (
            <TableRow key={recipe.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </article>
  );
};
