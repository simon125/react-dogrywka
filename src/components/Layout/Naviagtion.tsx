import { FC } from "react";
import { Link } from "react-router-dom";

export const Navigation: FC = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
