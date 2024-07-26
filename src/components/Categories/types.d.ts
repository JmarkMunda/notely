export type Props = {
  categories: Category[];
  selectedCategory: string;
  onItemClick: (category: string) => void;
};

export type Category = {
  key: string;
  label: string;
  color: string;
};
