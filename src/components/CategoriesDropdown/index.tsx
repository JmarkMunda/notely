import { Select, SelectItem } from "@nextui-org/select";
import { Props } from "./types";

const CategoriesDropdown = ({
  label,
  categories,
  onItemClick,
  ...props
}: Props) => {
  return (
    <Select label={label} variant="bordered" {...props}>
      {categories.map((category) => (
        <SelectItem
          key={category.key}
          onClick={() => onItemClick(category.label)}>
          {category.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CategoriesDropdown;
