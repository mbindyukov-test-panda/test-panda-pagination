import { ListItem } from '../ListItem/ListItem';

export const List = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </>
  );
};
