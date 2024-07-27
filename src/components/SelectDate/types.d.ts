export type Props = {
  sortBy: SortType;
  handleSortChange: (value: SortType) => void;
};

export type SortType = "asc" | "desc";
