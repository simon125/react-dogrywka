import { FC } from "react";
import { Link } from "react-router-dom";
import { ScrollUpButton } from "../../components/ScrollUpButton/ScrollUpButton";

export const Home: FC = () => {
  return (
    <>
      <article style={{ minHeight: "200vh" }}>
        <h1>Recipes library</h1>
        <p>
          Aplikacja która pozwoli Ci przeglądać i przechowywać Twoje ulubione
          przepisy
        </p>
        <Link to="/recipes" role="button">
          Zaczynam już teraz
        </Link>
      </article>
      <ScrollUpButton />
    </>
  );
};
