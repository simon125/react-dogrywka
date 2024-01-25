import { FC, ReactNode, createContext, useState } from "react";

export const RecipeSearchContext = createContext({
  searchPhrase: "",
  setSearchPhrase: (phrase: string) => {},
});

interface RecipeSearchContextProviderProps {
  children: ReactNode;
}

export const RecipeSearchContextProvider: FC<
  RecipeSearchContextProviderProps
> = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <RecipeSearchContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
      }}
    >
      {children}
    </RecipeSearchContext.Provider>
  );
};
