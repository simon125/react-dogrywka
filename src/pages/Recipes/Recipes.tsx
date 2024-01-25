import { FC } from "react";

import { Search } from "./components/Search";
import { Table } from "./components/Table";

export const Recipes: FC = () => {
  return (
    <>
      <Search />
      <Table />
    </>
  );
};
