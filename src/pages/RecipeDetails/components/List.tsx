import { FC } from "react";

interface ListProps {
  label: string;
  list: string[];
}

export const List: FC<ListProps> = ({ label, list }) => {
  return (
    <>
      <p>{label}:</p>
      <ul>
        {list.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </>
  );
};
