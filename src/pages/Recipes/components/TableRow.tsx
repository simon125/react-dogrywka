import { FC } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../../types";

interface TableRowProps {
  recipe: Recipe;
}

export const TableRow: FC<TableRowProps> = ({ recipe }) => {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.difficulty}</td>
      <td>{recipe.prepTimeMinutes}</td>
      <td>
        <Link to={`/recipes/${recipe.id}`}>Ugotuj</Link>
      </td>
    </tr>
  );
};
