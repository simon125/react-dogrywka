import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../../types";
import { List } from "./components/List";

export const RecipeDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        if (typeof data === "object" && !!data) {
          setRecipe(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (recipe === null) {
    return <article>Loading...</article>;
  }

  return (
    <article>
      <h1>{recipe.name}</h1>
      <img
        style={{ width: "50%", marginBottom: 100 }}
        src={recipe.image}
        alt={recipe.name}
      />
      <List label="Ingredients" list={recipe.ingredients} />
      <List label="Instructions" list={recipe.instructions} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/recipes" role="button">
          Wróć do przepisów
        </Link>
      </div>
    </article>
  );
};
