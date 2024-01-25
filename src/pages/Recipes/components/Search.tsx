import { FC, useContext } from "react";
import { RecipeSearchContext } from "../../../contexts/RecipeSearchContext";

export const Search: FC = () => {
  const { searchPhrase, setSearchPhrase } = useContext(RecipeSearchContext);

  return (
    <article style={{ display: "flex", gap: 20 }}>
      <input
        value={searchPhrase}
        onChange={(event) => {
          setSearchPhrase(event.target.value);
        }}
        type="text"
        placeholder="Search by name"
      />
      <button style={{ width: "fit-content" }}>Reset</button>
    </article>
  );
};
