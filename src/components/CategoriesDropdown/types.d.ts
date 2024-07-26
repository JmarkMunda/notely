import { SelectProps } from "@nextui-org/select";

export type Props = {
  label: string;
  categories: Category[];
  onItemClick: (category: string) => void;
} & Partial<SelectProps>;

export type Category = {
  key: string;
  label: string;
};
